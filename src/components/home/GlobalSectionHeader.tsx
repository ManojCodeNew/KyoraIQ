import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import { COLORS } from '../../config/colors';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';
import { heightPixel, widthPixel } from '../../config/responsive';

interface HeadingParams {
  title: string;
  onViewAllPress?: () => void;
  viewAllText?: string;
}

const GlobalSectionHeader = ({
  title,
  onViewAllPress,
  viewAllText,
}: HeadingParams) => {
  return (
    <View style={styles.globalSectionHeaderContainer}>
      <AppText
        textContent={title}
        textStyle={styles.sectionTitle}
        variant="btnText"
      />
      {onViewAllPress && viewAllText && (
        <Pressable onPress={onViewAllPress} style={styles.viewAllButton}>
          <AppText
            textContent={viewAllText}
            style={styles.viewAllText}
            variant="body"
          />
          <AppImage
            imagePath={IMAGES.img_chevronRight}
            variant="smallIcon"
            imageStyle={styles.chevronRightIcon}
          />
        </Pressable>
      )}
    </View>
  );
};

export default GlobalSectionHeader;

const styles = StyleSheet.create({
  globalSectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: COLORS.app_212121,
  },
  viewAllButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: widthPixel(2),
  },
  viewAllText: {
    color: COLORS.app_111D5F,
  },
  chevronRightIcon: {
    width: widthPixel(12),
    height: heightPixel(12),
  },
});
