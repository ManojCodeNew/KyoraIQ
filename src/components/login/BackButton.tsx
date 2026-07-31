import { StyleSheet } from 'react-native';
import React from 'react';
import AppButton from '../ui/button/AppButton';
import AppText from '../ui/text/AppText';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';

const BackButton = ({ onBack }: { onBack: () => void }) => {
  return (
    <AppButton
      variant="small"
      onClick={() => onBack()}
      buttonStyle={styles.backButtonStyle}
    >
      <AppText
        textContent="←"
        variant="subtitle"
        textStyle={styles.backButtonTextStyle}
      />
    </AppButton>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonStyle: {
    position: 'absolute',
    top: heightPixel(60),
    left: widthPixel(8),
    borderRadius: widthPixel(50),
    backgroundColor: COLORS.app_354078,
  },
  backButtonTextStyle: {
    color: COLORS.app_FFFFFF,
    fontWeight: '800',
  },
});
