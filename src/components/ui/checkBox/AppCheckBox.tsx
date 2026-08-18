import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppButton from '../button/AppButton';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';
import AppImage from '../image/AppImage';
import { IMAGES } from '../../../config/image';

type AppCheckBoxVariant = 'circle' | 'square';

interface AppCheckBoxProps {
  variant?: AppCheckBoxVariant;
  checked: boolean;
  onPress: () => void;
}

const AppCheckBox = ({
  variant = 'square',
  checked,
  onPress,
  ...rest
}: AppCheckBoxProps) => {
  return (
    <AppButton
      variant="small"
      onClick={() => onPress()}
      buttonStyle={[
        styles.checkBoxContainer,
        styles[variant],
        checked && variant === 'circle'
          ? styles.circleChecked
          : checked && variant === 'square'
          ? styles.squareChecked
          : {},
      ]}
      {...rest}
    >
      {checked && variant === 'square' && (
        <AppImage
          imagePath={IMAGES.img_checked}
          variant="arrow"
          imageStyle={styles.checkIconStyle}
        />
      )}
      {checked && variant === 'circle' && <View style={styles.innerCircle} />}
    </AppButton>
  );
};

export default AppCheckBox;

const styles = StyleSheet.create({
  checkBoxContainer: {},
  circle: {
    width: widthPixel(18),
    height: heightPixel(18),
    borderRadius: widthPixel(50),
    backgroundColor: COLORS.app_F5F6FB,
    borderColor: COLORS.app_21212126,
    borderWidth: widthPixel(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: widthPixel(18),
    height: heightPixel(18),
    borderRadius: widthPixel(5),
    borderColor: COLORS.app_8C8694,
    borderWidth: widthPixel(1),
    backgroundColor: COLORS.app_F5F6FB,
  },
  circleChecked: {
    borderColor: COLORS.app_111D5F,
  },
  squareChecked: {
    width: widthPixel(18),
    height: heightPixel(18),
    borderRadius: widthPixel(5),
    borderColor: COLORS.app_8C8694,
    borderWidth: widthPixel(1),
    backgroundColor: COLORS.app_111D5F,
  },
  innerCircle: {
    width: widthPixel(10),
    height: heightPixel(10),
    borderRadius: widthPixel(50),
    backgroundColor: COLORS.app_111D5F,
  },
  checkIconStyle: {
    flex: 1,
    width: widthPixel(13),
    height: widthPixel(13),
    alignItems: 'center',
  },
});
