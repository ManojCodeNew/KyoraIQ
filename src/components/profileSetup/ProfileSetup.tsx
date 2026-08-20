import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import AppText from '../ui/text/AppText';
import { COLORS } from '../../config/colors';
import { fontPixel, heightPixel, widthPixel } from '../../config/responsive';
import AppTextInput from '../ui/textInput/AppTextInput';
import { fontFamilies } from '../../config/font';
import { useAuthContext } from '../../context/AuthContextProvider';

interface ProfileSetupParams {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleProfileImagePicker: () => Promise<void>;
}

const ProfileSetup = ({
  name,
  setName,
  handleProfileImagePicker,
}: ProfileSetupParams) => {
  const { authState } = useAuthContext();
  return (
    <View style={styles.profileSetupContainer}>
      <View style={styles.profileImageSetContainer}>
        <AppImage
          imagePath={
            authState.user.profile.profileImagePath?.trim()
              ? { uri: authState.user.profile.profileImagePath }
              : IMAGES.img_defaultProfile
          }
          showLoader={true}
          variant="profileSetter"
        />

        <AppText
          textContent="Upload Photo"
          textStyle={styles.uploadPhotoTextStyle}
          variant="body"
          onPress={handleProfileImagePicker}
        />
      </View>
      <AppTextInput
        placeholderText="Name"
        textInputStyle={styles.textInputStyle}
        value={name}
        onChangeText={text => setName(text)}
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
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: fontFamilies.InterTight.medium,
    textAlign: 'center',
  },
  textInputStyle: {
    height: heightPixel(56),
  },
});
