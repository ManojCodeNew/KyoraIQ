import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';

type AppImageVariantType = 'default' | 'rounded' | 'thumbnail';

interface AppImagePropsType {
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
  rounded: {},
  thumbnail: {},
});
