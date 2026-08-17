import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../ui/text/AppText';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';
import SocialLogin from '../SocialLogin';
import RegisterForm from './RegisterForm';
import { FormData } from '../../../hooks/useAuth';

export interface RegisterPageProps {
  navigateToLogin: () => void;
  onSignup: () => void;
  value: FormData;
  setValue: React.Dispatch<React.SetStateAction<FormData>>;
}

const RegisterPage = ({
  navigateToLogin,
  onSignup,
  value,
  setValue,
}: RegisterPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.registerFormSection}>
        <View style={styles.headerTextContainer}>
          <AppText textContent="Let’s dive in!" variant="title" />
          <AppText textContent="Sign up to get started." variant="caption" />
        </View>
        <RegisterForm onSignup={onSignup} value={value} setValue={setValue} />
        <SocialLogin />
      </View>
      <View style={styles.registerFooterSection}>
        <AppText textContent="Already have an account? " variant="body" />
        <AppText
          textContent="Login"
          textStyle={styles.signupLink}
          variant="body"
          onPress={() => navigateToLogin()}
        />
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    gap: widthPixel(110),
  },
  registerFormSection: {
    gap: widthPixel(30),
  },
  headerTextContainer: {
    gap: heightPixel(3),
  },

  registerFooterSection: {
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
