import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import LinearGradient from 'react-native-linear-gradient';
import { fontPixel, heightPixel, widthPixel } from '../../config/responsive';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import FastImage from '@d11/react-native-fast-image';
import { AuthState } from '../../types/auth.types';
import AppButton from '../ui/button/AppButton';
import { COLORS } from '../../config/colors';
import AppSearchBar from './AppSearchBar';

interface CustomHeaderParams {
  authState: AuthState;
}

const CustomHeader = ({ authState }: CustomHeaderParams) => {
  return (
    <LinearGradient
      colors={['#D9DEFA', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.headerGradient}
    >
      <View style={styles.headerContainer}>
        <View style={styles.profileRow}>
          <View style={styles.profileGreetingContainer}>
            <AppImage
              imagePath={
                authState.user.profile.profileImagePath?.trim()
                  ? {
                      uri: authState.user.profile.profileImagePath,
                      priority: FastImage.priority.high,
                      cache: FastImage.cacheControl.web,
                    }
                  : IMAGES.img_fallBackProfile
              }
              variant="greetingProfile"
            />
            <AppText
              textContent={authState.user.profile.name}
              variant="title"
              textStyle={styles.profileName}
            />
          </View>
          <View style={styles.profileActionContainer}>
            <AppButton onClick={() => ''} variant="upgradeButton">
              <LinearGradient
                colors={['#5F79EA', '#17E9D9']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={[StyleSheet.absoluteFill, styles.proButton]}
              >
                <AppImage imagePath={IMAGES.img_pro} variant="smallIcon" />
                <AppText
                  textContent="PRO"
                  variant="title"
                  textStyle={styles.proText}
                />
              </LinearGradient>
            </AppButton>
            <AppImage imagePath={IMAGES.img_activeNotification} />
          </View>
        </View>
        <View style={styles.searchRow}>
          <View>
            <AppSearchBar />
          </View>
          <View style={styles.helpContainer}>
            <AppImage imagePath={IMAGES.img_help} variant="mediumIcon" />
            <AppText textContent="HELP" textStyle={styles.helpText} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerGradient: {},
  headerContainer: {
    paddingTop: heightPixel(44),
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(12),
    gap: heightPixel(20),
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileGreetingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPixel(8),
  },
  profileName: { fontSize: fontPixel(16) },
  profileActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPixel(8),
  },
  proButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPixel(6),
    borderRadius: widthPixel(56),
  },
  proText: {
    fontSize: fontPixel(12),
    color: COLORS.app_FFFFFF,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  helpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: {
    textAlign: 'center',
  },
});
