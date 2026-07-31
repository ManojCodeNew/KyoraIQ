import { StyleSheet } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import AppText from '../../components/ui/text/AppText';

const Login = () => {
  return (
    <SafeScreen>
      <AppText textContent="Login" variant="title" />
    </SafeScreen>
  );
};

export default Login;

const styles = StyleSheet.create({});
