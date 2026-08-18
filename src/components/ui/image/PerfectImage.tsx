import {
  ActivityIndicator,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppText from '../text/AppText';
import { COLORS } from '../../../config/colors';
import { heightPixel, widthPixel } from '../../../config/responsive';

type AppImageVariantType =
  | 'default'
  | 'rounded'
  | 'thumbnail'
  | 'headerLogo'
  | 'arrow'
  | 'profile_setter';

interface PerfectImageParams extends Omit<ImageProps, 'source'> {
  variant?: AppImageVariantType;
  imagePath?: ImageSourcePropType;
  fallBackImage?: ImageSourcePropType;
  showLoader?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
}

const PerfectImage = ({
  variant = 'default',
  imagePath,
  fallBackImage,
  showLoader = true,
  imageStyle,
  ...imageProps
}: PerfectImageParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // validation
  const resolvedImage = hasError ? fallBackImage : imagePath;

  // Optional handler
  if (!resolvedImage) {
    return (
      <View style={[styles.imageContainer, imageStyle]}>
        <AppText
          textContent="Image url is not valid"
          textStyle={styles.errorTextStyle}
        />
      </View>
    );
  }
  console.log('Loading status :', isLoading);

  return (
    <View style={[styles.imageContainer, styles[variant], imageStyle]}>
      <Image
        source={resolvedImage}
        resizeMode="contain"
        onLoadStart={() => {
          console.log('🟡 EVENT: onLoadStart');
          setIsLoading(true);
        }}
        onLoad={() => {
          console.log('🟢 EVENT: onLoad');
          setIsLoading(false);
        }}
        onError={error => {
          console.log('🔴 EVENT: onError', error.nativeEvent);
          setIsLoading(false);
          setHasError(true);
        }}
        {...imageProps}
      />

      {isLoading && showLoader && (
        <ActivityIndicator size={'small'} color={COLORS.app_111D5F} />
      )}
    </View>
  );
};

export default PerfectImage;

const styles = StyleSheet.create({
  imageContainer: {},
  errorTextStyle: {
    color: COLORS.app_D32F2F,
    textAlign: 'center',
  },
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
