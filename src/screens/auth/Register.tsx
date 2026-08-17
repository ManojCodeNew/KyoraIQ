import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import Header from '../../components/auth/login/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import { widthPixel } from '../../config/responsive';
import RegisterPage from '../../components/auth/register/RegisterPage';
import { useAuth } from '../../hooks/useAuth';

const Register = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const { formData, setFormData, handleRegister: register } = useAuth();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignup = async () => {
    const registerStatus = await register();
    if (registerStatus) {
      navigation.navigate('RoleSetup');
    }
  };

  const navigateToLogin = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Header isGoBack={false} onBack={handleBack} />
      <SafeScreen safeAreaStyle={styles.safeAreaStyle}>
        <RegisterPage
          navigateToLogin={navigateToLogin}
          onSignup={handleSignup}
          value={formData}
          setValue={setFormData}
        />
      </SafeScreen>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeAreaStyle: {
    marginTop: -32,
    borderTopRightRadius: widthPixel(20),
    borderTopLeftRadius: widthPixel(20),
  },
});
