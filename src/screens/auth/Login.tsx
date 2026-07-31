import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import Header from '../../components/auth/login/Header';
import LoginPage from '../../components/auth/login/LoginPage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import { widthPixel } from '../../config/responsive';

const Login = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('RoleSetup');
  };

  const navigateToSignup = () => {
    navigation.replace('Register');
  };
  return (
    <View style={styles.container}>
      <Header isGoBack={true} onBack={handleBack} />
      <SafeScreen safeAreaStyle={styles.safeAreaStyle}>
        <LoginPage onLogin={handleLogin} navigateToSignup={navigateToSignup} />
      </SafeScreen>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeAreaStyle: {
    marginTop: -32,
    borderTopRightRadius: widthPixel(20),
    borderTopLeftRadius: widthPixel(20),
  },
});
