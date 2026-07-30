import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

type AppButtonVariantType = 'primary' | 'secondary';

interface AppButtonPropsType {
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
  primary: {},
  secondary: {},
});
