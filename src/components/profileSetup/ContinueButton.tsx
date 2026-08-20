import { StyleSheet } from 'react-native';
import React from 'react';
import AppButton from '../ui/button/AppButton';
import AppText from '../ui/text/AppText';
import { COLORS } from '../../config/colors';
import { heightPixel } from '../../config/responsive';

const ContinueButton = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <AppButton
      variant="primary"
      onClick={() => onContinue()}
      buttonStyle={styles.continueButton}
    >
      <AppText
        textContent="Continue"
        variant="btnText"
        textStyle={styles.continueButtonText}
      />
    </AppButton>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  continueButton: {
    height: heightPixel(48),
    backgroundColor: COLORS.app_111D5F,
  },
  continueButtonText: {
    color: COLORS.app_FFFFFF,
  },
});
