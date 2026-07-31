import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React from 'react';
import { widthPixel } from '../../../config/responsive';

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
      style={[styles[variant], textInputStyle]}
      {...rest}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: widthPixel(10),
    paddingVertical: widthPixel(10),
  },
});
