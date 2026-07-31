import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import Header from '../../components/login/Header';
import LoginPage from '../../components/login/LoginPage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import { widthPixel } from '../../config/responsive';

const Login = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header onBack={handleBack} />
      <SafeScreen
        edges={['left', 'right']}
        safeAreaStyle={styles.safeAreaStyle}
      >
        <LoginPage />
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
