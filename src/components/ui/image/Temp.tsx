  // import FastImage from '@d11/react-native-fast-image';
  import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
  import {
    ActivityIndicator,
    ImageSourcePropType,
    Pressable,
    ImageStyle as RNImageStyle,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
  } from 'react-native';
  
  import FastImage, {
    FastImageProps,
    ImageStyle as FastImageStyle,
    OnErrorEvent,
    OnLoadEvent,
    OnProgressEvent,
  } from '@d11/react-native-fast-image';
  // import { colors } from 'src/config/colors';

  type AppImageSource = ImageSourcePropType | FastImageProps['source'];

  interface AppImageProps
    extends Omit<FastImageProps, 'source' | 'style' | 'onError'> {
    source: AppImageSource;
    style?: StyleProp<RNImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    loaderColor?: string;
    loaderSize?: 'small' | 'large' | number;
    showLoader?: boolean;
    renderLoader?: () => React.ReactNode;
    renderError?: () => React.ReactNode;
    onError?: () => void;
    onPress?: () => void;
    tintColor?: string;
  }

  const isLocalSource = (source: AppImageSource): source is number => {
    return typeof source === 'number';
  };

  const AppImage = memo(
    ({
      source,
      style,
      containerStyle,
      loaderColor = colors.primary,
      loaderSize = 'small',
      showLoader = true,
      renderLoader,
      renderError,
      resizeMode = FastImage.resizeMode.contain,
      onLoadStart,
      onLoad,
      onLoadEnd,
      onError,
      onProgress,
      onPress,
      tintColor,
      ...rest
    }: AppImageProps) => {
      const local = isLocalSource(source);

      const [isLoading, setIsLoading] = useState(!local && showLoader);
      const [hasError, setHasError] = useState(false);

      const requestIdRef = useRef(0);

      useEffect(() => {
        requestIdRef.current += 1;
        if (!local && showLoader) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
        setHasError(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [local ? source : (source as { uri?: string })?.uri]);

      const handleLoadStart = useCallback(() => {
        if (showLoader) setIsLoading(true);
        onLoadStart?.();
      }, [onLoadStart, showLoader]);

      const handleLoad = useCallback(
        (e: OnLoadEvent) => {
          onLoad?.(e);
        },
        [onLoad],
      );

      const handleLoadEnd = useCallback(() => {
        setIsLoading(false);
        onLoadEnd?.();
      }, [onLoadEnd]);

      const handleFastImageError = useCallback(
        (_event: OnErrorEvent) => {
          setIsLoading(false);
          setHasError(true);
          onError?.();
        },
        [onError],
      );

      const handleLocalImageError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
      }, [onError]);

      const handleProgress = useCallback(
        (e: OnProgressEvent) => {
          onProgress?.(e);
        },
        [onProgress],
      );

      return (
        <View style={[styles.container, containerStyle]}>
          {local ? (
            <Pressable onPress={onPress} disabled={!onPress}>
              <FastImage
                source={source as number}
                style={
                  [styles.image, style] as unknown as StyleProp<FastImageStyle>
                }
                resizeMode={resizeMode as any}
                onError={handleLocalImageError}
                tintColor={tintColor}
              />
            </Pressable>
          ) : (
            <Pressable onPress={onPress}>
              <FastImage
                {...rest}
                source={source as FastImageProps['source']}
                style={
                  [styles.image, style] as unknown as StyleProp<FastImageStyle>
                }
                resizeMode={resizeMode}
                onLoadStart={handleLoadStart}
                onProgress={handleProgress}
                onLoad={handleLoad}
                onLoadEnd={handleLoadEnd}
                onError={handleFastImageError}
                tintColor={tintColor}
              />
            </Pressable>
          )}

          {!local && isLoading && !hasError && (
            <View style={styles.overlay} pointerEvents="none">
              {renderLoader ? (
                renderLoader()
              ) : (
                <ActivityIndicator size={loaderSize} color={loaderColor} />
              )}
            </View>
          )}

          {hasError && renderError && (
            <View style={styles.overlay} pointerEvents="none">
              {renderError()}
            </View>
          )}
        </View>
      );
    },
  );

  AppImage.displayName = 'AppImage';

  export default AppImage;

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFill,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.imagePlaceholder,
    },
  });
 