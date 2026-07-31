import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/profileSetup/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import { COLORS } from '../../config/colors';

const ChooseRoleScreen = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onBack={handleBack} />
      <SafeScreen>
        <Text>ChooseRoleScreen</Text>
      </SafeScreen>
    </View>
  );
};

export default ChooseRoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },
});
