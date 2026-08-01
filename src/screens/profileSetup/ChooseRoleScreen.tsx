import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/profileSetup/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import { COLORS } from '../../config/colors';
import ProfileSetupHeader from '../../components/profileSetup/ProfileSetupHeader';
import RoleCard from '../../components/profileSetup/RoleCard';
import { widthPixel } from '../../config/responsive';
import { ROLE_DATA } from '../../config/data';

export interface RoleType {
  role: string;
  description: string;
  isChecked: boolean;
}

const ChooseRoleScreen = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.profileSetupContainer}>
      <Header onBack={handleBack} />
      <SafeScreen edges={['left', 'right']}>
        <View style={styles.profileSetupBodyContainer}>
          <ProfileSetupHeader
            title={'Choose Your Role'}
            subTitle={"Tell us how you'd like to use the app."}
          />
          {ROLE_DATA.map((value, index) => (
            <RoleCard data={value} index={index} key={index} />
          ))}
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
    gap: widthPixel(32),
  },
});
