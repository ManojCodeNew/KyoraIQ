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
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(12),
    height: widthPixel(48),
    backgroundColor: COLORS.app_CCCCCC,
    borderRadius: widthPixel(12),
  },
  secondary: {
    borderRadius: widthPixel(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: widthPixel(36),
    backgroundColor: COLORS.app_111D5F,
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
