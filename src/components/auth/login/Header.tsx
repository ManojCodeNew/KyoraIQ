import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppImage from '../../ui/image/AppImage';
import BackButton from './BackButton';
import { COLORS } from '../../../config/colors';
import { IMAGES } from '../../../config/image';
import { heightPixel } from '../../../config/responsive';

const Header = ({
  onBack,
  isGoBack,
}: {
  onBack: () => void;
  isGoBack: boolean;
}) => {
  return (
    <View style={styles.container}>
      {isGoBack && <BackButton onBack={onBack} />}
      <AppImage
        imagePath={IMAGES.img_logo.img}
        imageAlt={IMAGES.img_logo.alt}
        variant="headerLogo"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: heightPixel(200),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.app_111D5F,
  },
});
