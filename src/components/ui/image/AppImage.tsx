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

type AppImageVariantType =
  | 'default'
  | 'rounded'
  | 'thumbnail'
  | 'headerLogo'
  | 'arrow'
  | 'profile_setter';

interface AppImagePropsType extends ImageProps {
  variant?: AppImageVariantType;
  imageStyle?: StyleProp<ImageStyle>;
  imagePath: ImageSourcePropType;
  imageAlt?: string;
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
    width: widthPixel(32),
    height: heightPixel(32),
  },
  profile_setter: {
    width: widthPixel(100),
    height: heightPixel(100),
  },
});
