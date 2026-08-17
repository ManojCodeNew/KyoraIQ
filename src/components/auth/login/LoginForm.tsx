import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../ui/text/AppText';
import AppButton from '../../ui/button/AppButton';
import AppTextInput from '../../ui/textInput/AppTextInput';
import { COLORS } from '../../../config/colors';
import { widthPixel } from '../../../config/responsive';
import { LoginPageProps } from './LoginPage';

const LoginForm = ({
  onLogin,
  navigateToSignup,
  value,
  setValue,
}: LoginPageProps) => {
  return (
    <View style={styles.loginFormContainer}>
      <AppTextInput
        placeholderText="Email"
        variant="default"
        value={value.email}
        onChangeText={text => setValue(prev => ({ ...prev, email: text }))}
      />
      <AppTextInput
        placeholderText="Password"
        variant="default"
        secureTextEntry
        value={value.password}
        onChangeText={text => setValue(prev => ({ ...prev, password: text }))}
      />
      <AppButton
        variant="primary"
        onClick={() => onLogin()}
        buttonStyle={styles.loginButtonStyle}
      >
        <AppText
          textContent="Login"
          variant="btnText"
          textStyle={styles.loginButtonTextStyle}
        />
      </AppButton>
      <View style={styles.forgetPasswordTextContainer}>
        <AppText textContent="Forgot Password? " />
        <AppText
          textContent="Reset"
          variant="body"
          textStyle={styles.resetTextStyle}
          onPress={() => navigateToSignup()}
        />
      </View>
    </View>
  );
};

export default LoginForm;

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
  forgetPasswordTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetTextStyle: {
    color: COLORS.app_111D5F,
    textDecorationLine: 'underline',
  },
});
