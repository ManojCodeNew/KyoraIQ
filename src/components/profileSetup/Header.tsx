import { StyleSheet, View } from 'react-native';
import React from 'react';
import BackButton from './BackButton';
import { heightPixel } from '../../config/responsive';
import ProgressBar from './ProgressBar';

const Header = ({ onBack }: { onBack: () => void }) => {
  return (
    <View style={styles.container}>
      <BackButton onBack={onBack} />
      <ProgressBar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: heightPixel(70),
    paddingVertical: heightPixel(10),
  },
});
