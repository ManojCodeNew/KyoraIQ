import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../ui/text/AppText';
import AppButton from '../../ui/button/AppButton';
import AppTextInput from '../../ui/textInput/AppTextInput';
import { COLORS } from '../../../config/colors';
import { heightPixel, widthPixel } from '../../../config/responsive';

const RegisterForm = ({ onSignup }: { onSignup: () => void }) => {
  return (
    <View style={styles.loginFormContainer}>
      <AppTextInput placeholderText="Email" variant="default" />
      <AppTextInput placeholderText="Password" variant="default" />
      <View style={styles.agreementContainer}>
        <View style={styles.checkbox} />
        <AppText textContent="I agree to the" variant="caption" />
        <AppText
          textContent="Privacy Policy"
          variant="caption"
          textStyle={styles.linkText}
        />
        <AppText textContent="and" variant="caption" />
        <AppText
          textContent="Terms of Service"
          variant="caption"
          textStyle={styles.linkText}
        />
      </View>
      <AppButton
        variant="primary"
        onClick={() => onSignup()}
        buttonStyle={styles.loginButtonStyle}
      >
        <AppText
          textContent="Create Account"
          variant="btnText"
          textStyle={styles.loginButtonTextStyle}
        />
      </AppButton>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  loginFormContainer: {
    gap: widthPixel(12),
  },
  loginButtonStyle: {
    backgroundColor: COLORS.app_111D5F,
  },
  loginButtonTextStyle: {
    color: COLORS.app_FFFFFF,
  },
  agreementContainer: {
    flexDirection: 'row',
    gap: widthPixel(4),
    alignItems: 'center',
    paddingVertical: heightPixel(10),
  },
  checkbox: {
    width: widthPixel(20),
    height: heightPixel(20),
    borderWidth: widthPixel(1),
    borderColor: COLORS.app_8C8694,
    borderRadius: widthPixel(5),
  },
  linkText: {
    color: COLORS.app_111D5F,
  },
});
