import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/profileSetup/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import { COLORS } from '../../config/colors';
import ProfileSetupHeader from '../../components/profileSetup/ProfileSetupHeader';
import RoleCard from '../../components/profileSetup/RoleCard';
import { heightPixel, widthPixel } from '../../config/responsive';
import { ROLE_DATA } from '../../config/data';
import ContinueButton from '../../components/profileSetup/ContinueButton';
import { Role } from '../../types/auth.types';

export interface RoleType {
  role: Role;
  description: string;
  isChecked: boolean;
}

const ChooseRoleScreen = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('ProfileDetails');
  };
  return (
    <View style={styles.profileSetupContainer}>
      <Header onBack={handleBack} currentStep={1} totalStep={2} />

      <SafeScreen edges={['left', 'right']}>
        <View style={styles.profileSetupBodyContainer}>
          <View style={styles.chooseRoleContainer}>
            <ProfileSetupHeader
              title={'Choose Your Role'}
              subTitle={"Tell us how you'd like to use the app."}
            />
            <View style={styles.roleCardContainer}>
              {ROLE_DATA.map((value, index) => (
                <RoleCard data={value} index={index} key={index} />
              ))}
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

export default ChooseRoleScreen;

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
  chooseRoleContainer: {
    gap: widthPixel(32),
  },
  roleCardContainer: {
    gap: widthPixel(8),
  },
  continueButtonContainer: {},
});
