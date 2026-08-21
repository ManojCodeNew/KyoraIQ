import { StyleSheet } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import AppImage from '../image/AppImage';
import AppButton from '../button/AppButton';
import { isIOS } from '../../../utils/platformUtil';
import { COLORS } from '../../../config/colors';
import { ICONS } from '../../../config/icon';

interface BackButtonProps {
  onBack: () => void;
  buttonColor?: string;
  position?: 'absolute' | 'static';
}

const BackButton = ({
  onBack,
  buttonColor = COLORS.app_FFFFFF,
  position = 'absolute',
}: BackButtonProps) => {
  const isAbsolute = position === 'absolute';
  return (
    <AppButton
      onClick={() => onBack()}
      buttonStyle={
        isAbsolute ? styles.absoluteBackButton : styles.staticBackButton
      }
      variant="small"
    >
      <AppImage
        variant="arrow"
        imagePath={ICONS.ic_backArrow}
        showLoader={false}
        tintColor={buttonColor}
      />
    </AppButton>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  absoluteBackButton: {
    position: 'absolute',
    top: isIOS() ? heightPixel(60) : heightPixel(30),
    left: widthPixel(10),
    borderRadius: widthPixel(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  staticBackButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
