import { StyleSheet, View } from 'react-native';
import React from 'react';
import BackButton from '../ui/backButton/BackButton';
import { heightPixel } from '../../config/responsive';
import ProgressBar from './ProgressBar';
import { isIOS } from '../../utils/platformUtil';
import { COLORS } from '../../config/colors';

interface HeaderParams {
  onBack: () => void;
  currentStep: number;
  totalStep: number;
}

const Header = ({ onBack, currentStep, totalStep }: HeaderParams) => {
  return (
    <View style={styles.container}>
      <BackButton
        onBack={onBack}
        buttonStyle={{ tintColor: COLORS.app_000000 }}
      />
      <ProgressBar currentStep={currentStep} totalStep={totalStep} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: isIOS() ? heightPixel(70) : heightPixel(40),
    paddingVertical: heightPixel(20),
  },
});
