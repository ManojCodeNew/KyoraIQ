import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import LinearGradient from 'react-native-linear-gradient';
import { heightPixel, widthPixel } from '../../config/responsive';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import FastImage from '@d11/react-native-fast-image';
import { AuthState } from '../../types/auth.types';

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
            <AppText textContent={authState.user.profile.name} />
          </View>
          <View style={styles.profileActionContainer}>
            <AppText textContent="Profile" />
          </View>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <AppText textContent="Search" />
          </View>
          <View style={styles.helpContainer}>
            <AppText textContent="Search" />
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
  profileActionContainer: {},
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {},
  helpContainer: {},
});
