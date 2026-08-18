import {
  ActivityIndicator,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import FastImage, {
  FastImageProps,
  Source,
} from '@d11/react-native-fast-image';
import { COLORS } from '../../../config/colors';

type AppImageVariantType =
  | 'default'
  | 'rounded'
  | 'thumbnail'
  | 'headerLogo'
  | 'arrow'
  | 'profile_setter';

export type AppImageSource = number | Source;

interface AppImagePropsType
  extends Omit<FastImageProps, 'source' | 'resizeMode'> {
  variant?: AppImageVariantType;
  imageStyle?: StyleProp<ImageStyle>;
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
    <View style={[styles[variant], imageStyle]}>
      <FastImage
        source={resolvedImage}
        resizeMode={FastImage.resizeMode.contain}
        style={StyleSheet.absoluteFill}
        onError={() => handleError}
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
  rounded: {
    width: widthPixel(30),
    height: heightPixel(30),
  },
  thumbnail: {
    width: widthPixel(375),
    height: heightPixel(505),
  },
  headerLogo: {
    width: widthPixel(64),
    height: heightPixel(100),
  },
  arrow: {
    width: widthPixel(24),
    height: heightPixel(20),
  },
  profile_setter: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderRadius: heightPixel(100),
  },
});
