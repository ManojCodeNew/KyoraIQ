import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React from 'react';
import { fontPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';

type AppTextInputVariantType = 'default';

interface AppTextInputProp extends TextInputProps {
  variant?: AppTextInputVariantType;
  placeholderText: string;
  textInputStyle?: StyleProp<TextStyle>;
}

const AppTextInput = ({
  variant = 'default',
  placeholderText,
  textInputStyle,
  ...rest
}: AppTextInputProp) => {
  return (
    <TextInput
      placeholder={placeholderText}
      placeholderTextColor={COLORS.app_8C8694}
      style={[styles[variant], textInputStyle]}
      {...rest}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: widthPixel(12),
    paddingVertical: widthPixel(12),
    color: COLORS.app_212121,
    borderColor: COLORS.app_E8E8EA,
    borderWidth: widthPixel(1),
    width: '100%',
    fontSize: fontPixel(16),
    fontWeight: '400',
    borderRadius: widthPixel(12),
  },
});
