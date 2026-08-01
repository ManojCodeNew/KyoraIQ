import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { fontPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';
import { fontFamilies } from '../../../config/font';

type AppTextVariantType = 'title' | 'subtitle' | 'body' | 'caption' | 'btnText';

interface AppTextPropsType extends TextProps {
  variant?: AppTextVariantType;
  textStyle?: StyleProp<TextStyle>;
  textContent: string;
}

const AppText = ({
  variant = 'body',
  textStyle,
  textContent,
  ...rest
}: AppTextPropsType) => {
  return (
    <Text style={[styles[variant], textStyle]} {...rest}>
      {textContent}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  body: {
    fontSize: fontPixel(14),
    fontWeight: '400',
    color: COLORS.app_8C8694,
    fontFamily: fontFamilies.InterTight.regular,
  },
  title: {
    fontSize: fontPixel(24),
    fontWeight: '600',
    color: COLORS.app_212121,
    fontFamily: fontFamilies.InterTight.semiBold,
  },
  subtitle: {
    fontSize: fontPixel(16),
    fontWeight: '400',
    color: COLORS.app_212121,
    fontFamily: fontFamilies.InterTight.regular,
  },
  caption: {
    fontSize: fontPixel(12),
    fontWeight: '400',
    color: COLORS.app_8C8694,
    fontFamily: fontFamilies.InterTight.regular,
  },
  btnText: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    color: COLORS.app_8C8694,
    fontFamily: fontFamilies.InterTight.medium,
    textAlign: 'center',
  },
  
});
