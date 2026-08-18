import { StyleSheet } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import AppImage from '../image/AppImage';
import { IMAGES } from '../../../config/image';
import AppButton from '../button/AppButton';
import { isIOS } from '../../../utils/platformUtil';
import { COLORS } from '../../../config/colors';

interface BackButtonProps {
  onBack: () => void;
  buttonColor?: string;
}

const BackButton = ({
  onBack,
  buttonColor = COLORS.app_FFFFFF,
}: BackButtonProps) => {
  return (
    <AppButton
      onClick={() => onBack()}
      buttonStyle={styles.backButtonStyle}
      variant="small"
    >
      <AppImage
        variant="arrow"
        imagePath={IMAGES.img_back_arrow}
        showLoader={false}
        tintColor={buttonColor}
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
