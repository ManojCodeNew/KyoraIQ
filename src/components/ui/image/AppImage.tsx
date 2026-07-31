import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';

type AppImageVariantType = 'default' | 'rounded' | 'thumbnail' | 'headerLogo';

interface AppImagePropsType extends ImageProps {
  variant?: AppImageVariantType;
  imageStyle?: StyleProp<ImageStyle>;
  imagePath: ImageSourcePropType;
  imageAlt: string;
}

const AppImage = ({
  variant = 'default',
  imagePath,
  imageStyle,
  imageAlt,
  ...rest
}: AppImagePropsType) => {
  return (
    <Image
      source={imagePath}
      alt={imageAlt}
      style={[styles[variant], imageStyle]}
      {...rest}
    />
  );
};

export default AppImage;

const styles = StyleSheet.create({
  default: {},
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
});
