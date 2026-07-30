import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';

type AppButtonVariantType = 'primary' | 'secondary';

interface AppButtonPropsType extends PressableProps {
  variant?: AppButtonVariantType;
  buttonStyle?: StyleProp<ViewStyle>;
  onClick: () => void;
  children: React.ReactNode;
}

const AppButton = ({
  variant = 'primary',
  buttonStyle,
  onClick,
  children,
  ...rest
}: AppButtonPropsType) => {
  return (
    <Pressable
      style={[styles[variant], buttonStyle]}
      onPress={onClick}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  primary: {
    paddingVertical: heightPixel(14),
    paddingHorizontal: heightPixel(60),
    backgroundColor: '#ccc',
    borderRadius: widthPixel(12),
  },
  secondary: {
    paddingVertical: heightPixel(20),
    paddingHorizontal: heightPixel(20),
    backgroundColor: '#d78c8c',
  },
});
