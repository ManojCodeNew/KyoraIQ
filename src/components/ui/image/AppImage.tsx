import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  // ImageSourcePropType,
} from 'react-native';
import React, { useState } from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import FastImage, {
  FastImageProps,
  Source,
  ImageStyle as FastImageStyleProps,
} from '@d11/react-native-fast-image';
import { COLORS } from '../../../config/colors';

type AppImageVariantType =
  | 'default'
  | 'socialMedia'
  | 'introThumbnail'
  | 'headerLogo'
  | 'arrow'
  | 'profileSetter'
  | 'smallProfile'
  | 'smallIcon'
  | 'mediumIcon';

// export type AppImageSource = ImageSourcePropType | FastImageProps['source']; // source?: Source | ImageRequireSource;
export type AppImageSource = number | Source;

interface AppImagePropsType
  extends Omit<FastImageProps, 'source' | 'resizeMode'> {
  variant?: AppImageVariantType;
  imageStyle?: StyleProp<FastImageStyleProps>;
  fallBackImage?: AppImageSource;
  showLoader?: boolean;
  imagePath: AppImageSource;
}

const AppImage = ({
  variant = 'default',
  imagePath,
  imageStyle,
  showLoader = true,
  fallBackImage,
  ...imageProps
}: AppImagePropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(showLoader);
  const [hasError, setHasError] = useState<boolean>(false);

  // validation
  const resolvedImage = hasError && fallBackImage ? fallBackImage : imagePath;

  const handleError = () => {
    if (fallBackImage) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  return (
    <View style={[styles[variant], imageStyle, styles.clip]}>
      <FastImage
        source={resolvedImage} // Fast Image prop
        resizeMode={FastImage.resizeMode.contain} // Fast Image prop
        style={[StyleSheet.absoluteFill, styles[variant], imageStyle]}
        onError={() => handleError()}
        onLoadEnd={() => setIsLoading(false)}
        {...imageProps}
      />

      {isLoading && (
        <ActivityIndicator
          size={'small'}
          color={COLORS.app_111D5F}
          style={StyleSheet.absoluteFill}
        />
      )}
    </View>
  );
};

export default AppImage;

const styles = StyleSheet.create({
  default: {
    width: widthPixel(24),
    height: heightPixel(24),
  },
  socialMedia: {
    width: widthPixel(30),
    height: heightPixel(30),
  },
  introThumbnail: {
    width: widthPixel(375),
    height: heightPixel(505),
  },
  headerLogo: {
    width: widthPixel(104),
    height: heightPixel(200),
  },
  arrow: {
    width: widthPixel(24),
    height: heightPixel(20),
  },
  profileSetter: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderRadius: heightPixel(100),
  },
  smallProfile: {
    width: widthPixel(36),
    height: heightPixel(36),
    borderRadius: heightPixel(36),
  },
  smallIcon: {
    width: widthPixel(18),
    height: heightPixel(18),
  },
  mediumIcon: {
    width: widthPixel(32),
    height: heightPixel(32),
    borderRadius: heightPixel(8),
  },
  clip: {
    overflow: 'hidden',
  },
});
