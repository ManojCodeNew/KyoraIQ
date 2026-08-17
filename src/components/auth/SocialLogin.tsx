import { StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';
import { IMAGES } from '../../config/image';
import AppImage from '../ui/image/AppImage';
import AppText from '../ui/text/AppText';

const SocialLogin = () => {
  return (
    <View style={styles.socialMediaIconContainer}>
      <View style={styles.orContinueContainer}>
        <View style={styles.line} />
        <AppText
          textContent="or continue with"
          textStyle={styles.orContinueTextStyle}
          variant="body"
        />
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconStyle}>
          <AppImage imagePath={IMAGES.img_apple} variant="rounded" />
        </View>
        <View style={styles.iconStyle}>
          <AppImage imagePath={IMAGES.img_google} variant="rounded" />
        </View>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  orContinueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPixel(20),
  },
  line: {
    flex: 1,
    height: heightPixel(2),
    backgroundColor: COLORS.app_E8E8EA,
  },
  orContinueTextStyle: {},
  socialMediaIconContainer: {
    gap: widthPixel(12),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPixel(12),
  },
  iconStyle: {
    borderColor: COLORS.app_E8E8EA,
    borderWidth: widthPixel(1),
    paddingVertical: heightPixel(10),
    paddingHorizontal: heightPixel(10),
    borderRadius: widthPixel(50),
  },
});
