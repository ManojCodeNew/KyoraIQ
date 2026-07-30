import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type AppTextVariantType = 'title' | 'subtitle' | 'body' | 'caption';

interface AppTextPropsType {
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
  body: {},
  title: {},
  subtitle: {},
  caption: {},
});
