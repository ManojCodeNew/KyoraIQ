import { StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';

interface ProgressBarProp {
  currentStep: number;
  totalStep: number;
}

const ProgressBar = ({ currentStep, totalStep }: ProgressBarProp) => {
  const progress = ((currentStep - 1) / totalStep) * 100;
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressContainer: {
    width: '60%',
    height: heightPixel(8),
    borderRadius: widthPixel(4),
    backgroundColor: COLORS.app_F5F6FB,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.app_111D5F,
  },
});
