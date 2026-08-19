import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';

type AppButtonVariantType = 'primary' | 'secondary' | 'small' | 'upgradeButton';

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
    paddingHorizontal: widthPixel(60),
    backgroundColor: COLORS.app_CCCCCC,
    borderRadius: widthPixel(12),
  },
  secondary: {
    paddingVertical: heightPixel(20),
    paddingHorizontal: widthPixel(20),
    backgroundColor: COLORS.app_CCCCCC,
  },
  small: {
    width: widthPixel(30),
    height: heightPixel(30),
    borderRadius: widthPixel(12),
  },
  upgradeButton: {
    width: widthPixel(68),
    height: heightPixel(28),
  },
});
