import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';

interface GlobalCardParams {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onCardPress?: () => void;
  fullWidth: boolean;
}

const GlobalCard = ({
  children,
  style,
  fullWidth = true,
  onCardPress,
}: GlobalCardParams) => {
  const cardStyle = [fullWidth && styles.fullWidth, styles.base, style];

  if (onCardPress) {
    return (
      <Pressable style={cardStyle} onPress={onCardPress}>
        {children}
      </Pressable>
    );
  }
  return <View style={cardStyle}>{children}</View>;
};

export default GlobalCard;

const styles = StyleSheet.create({
  base: {
    // width: widthPixel(240),
    // height: heightPixel(170),
    borderRadius: widthPixel(12),
    borderWidth: widthPixel(1),
    borderColor: COLORS.app_E8E8EA,
    backgroundColor: COLORS.app_FFFFFF,
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(12),
    alignSelf: 'flex-start',
  },
  fullWidth: {
    alignSelf: 'stretch',
    flex: undefined,
  },
});
