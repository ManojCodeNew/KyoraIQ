import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import { heightPixel } from '../../config/responsive';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <AppText textContent="Welcome back!" variant="title" />
        <AppText
          textContent="Login to continue, your bookings are waiting."
          variant="caption"
        />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPixel(10),
    paddingHorizontal: heightPixel(12),
  },
  headerTextContainer: {
    gap: heightPixel(3),
  },
});
