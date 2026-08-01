import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import AppImage from '../image/AppImage';
import { IMAGES } from '../../../config/image';
import AppButton from '../button/AppButton';
import { isIOS } from '../../../utils/platformUtil';

interface BackButtonProps {
  onBack: () => void;
  buttonStyle?: StyleProp<ImageStyle>;
}

const BackButton = ({ onBack, buttonStyle }: BackButtonProps) => {
  return (
    <AppButton
      onClick={() => onBack()}
      buttonStyle={styles.backButtonStyle}
      variant="small"
    >
      <AppImage
        variant="arrow"
        imagePath={IMAGES.img_back_arrow.img}
        imageAlt={IMAGES.img_back_arrow.alt}
        imageStyle={buttonStyle}
      />
    </AppButton>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonStyle: {
    position: 'absolute',
    top: isIOS() ? heightPixel(60) : heightPixel(30),
    left: widthPixel(10),
    borderRadius: widthPixel(50),
  },
});
