import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../ui/text/AppText';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';
import SocialLogin from '../SocialLogin';
import LoginForm from './LoginForm';

export interface LoginPageProps {
  onLogin: () => void;
  navigateToSignup: () => void;
}

const LoginPage = ({ onLogin, navigateToSignup }: LoginPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginFormSection}>
        <View style={styles.headerTextContainer}>
          <AppText textContent="Welcome back!" variant="title" />
          <AppText
            textContent="Login to continue, your bookings are waiting."
            variant="caption"
          />
        </View>
        <LoginForm onLogin={onLogin} navigateToSignup={navigateToSignup} />
        <SocialLogin />
      </View>

      <View style={styles.loginFooterSection}>
        <AppText textContent="Don’t have an account? " variant="body" />
        <AppText
          textContent="Sign Up"
          textStyle={styles.signupLink}
          variant="body"
          onPress={() => navigateToSignup()}
        />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    gap: widthPixel(140),
  },
  loginFormSection: {
    gap: widthPixel(30),
  },
  headerTextContainer: {
    gap: heightPixel(3),
  },

  loginFooterSection: {
    flexDirection: 'row',
    height: heightPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupLink: {
    color: COLORS.app_111D5F,
    textDecorationLine: 'underline',
  },
});
