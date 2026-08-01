import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import AppText from '../ui/text/AppText';
import { COLORS } from '../../config/colors';
import { heightPixel, widthPixel } from '../../config/responsive';
import AppTextInput from '../ui/textInput/AppTextInput';

const ProfileSetup = () => {
  return (
    <View style={styles.profileSetupContainer}>
      <View style={styles.profileImageSetContainer}>
        <AppImage
          imagePath={IMAGES.img_profile.img}
          imageAlt={IMAGES.img_profile.alt}
        />
        <AppText
          textContent="Upload Photo"
          textStyle={styles.uploadPhotoTextStyle}
          variant="body"
        />
      </View>
      <AppTextInput
        placeholderText="Name"
        textInputStyle={styles.textInputStyle}
      />
    </View>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  profileSetupContainer: {
    alignItems: 'center',
    gap: widthPixel(40),
  },
  profileImageSetContainer: {
    gap: widthPixel(12),
  },
  uploadPhotoTextStyle: {
    textDecorationLine: 'underline',
    color: COLORS.app_111D5F,
  },
  textInputStyle: {
    height: heightPixel(56),
  },
});
