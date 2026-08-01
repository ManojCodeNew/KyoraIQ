import { StyleSheet } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import AppButton from '../ui/button/AppButton';
import { isIOS } from '../../utils/platformUtil';

const BackButton = ({ onBack }: { onBack: () => void }) => {
  return (
    <AppButton style={styles.backButtonStyle} onClick={() => onBack()}>
      <AppImage
        variant="arrow"
        imagePath={IMAGES.img_back_arrow.img}
        imageAlt={IMAGES.img_back_arrow.alt}
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
    backgroundColor: COLORS.app_FFFFFF,
  },
});
