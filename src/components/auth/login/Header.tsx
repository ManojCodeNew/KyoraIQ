import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppImage from '../../ui/image/AppImage';
import { COLORS } from '../../../config/colors';
import { IMAGES } from '../../../config/image';
import { heightPixel } from '../../../config/responsive';
import BackButton from '../../ui/backButton/BackButton';

const Header = ({
  onBack,
  isGoBack,
}: {
  onBack: () => void;
  isGoBack: boolean;
}) => {
  return (
    <View style={styles.container}>
      {isGoBack && (
        <BackButton
          onBack={onBack}
          buttonStyle={{ tintColor: COLORS.app_FFFFFF }}
        />
      )}
      <AppImage imagePath={IMAGES.img_logo} variant="headerLogo" />
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
  backButtonStyle: {
    backgroundColor: COLORS.app_354078,
    tintColor: COLORS.app_FFFFFF,
  },
});
