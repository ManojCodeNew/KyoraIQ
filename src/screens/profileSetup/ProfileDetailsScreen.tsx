import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/profileSetup/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import { COLORS } from '../../config/colors';
import ProfileSetupHeader from '../../components/profileSetup/ProfileSetupHeader';
import { heightPixel, widthPixel } from '../../config/responsive';
import ContinueButton from '../../components/profileSetup/ContinueButton';
import ProfileSetup from '../../components/profileSetup/ProfileSetup';

export interface RoleType {
  role: string;
  description: string;
  isChecked: boolean;
}

const ProfileDetailsScreen = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };
  return (
    <View style={styles.profileSetupContainer}>
      <Header onBack={handleBack} />
      <SafeScreen edges={['left', 'right']}>
        <View style={styles.profileSetupBodyContainer}>
          <View style={styles.profileContainer}>
            <ProfileSetupHeader
              title={'Complete Your Profile'}
              subTitle={'Upload a profile picture and your name to get started'}
            />
            <View style={styles.roleCardContainer}>
              <ProfileSetup />
            </View>
          </View>

          <View style={styles.continueButtonContainer}>
            <ContinueButton onContinue={handleContinue} />
          </View>
        </View>
      </SafeScreen>
    </View>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  profileSetupContainer: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },
  profileSetupBodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(10),
  },
  profileContainer: {
    gap: widthPixel(32),
  },
  roleCardContainer: {
    gap: widthPixel(8),
  },
  continueButtonContainer: {},
});
