import { StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';

interface PaginationDividerProp {
  activeIndex: number;
  dataLength: number;
}

const PaginationDivider = ({
  activeIndex,
  dataLength,
}: PaginationDividerProp) => {
  return (
    <View style={styles.dividerContainer}>
      {Array.from({ length: dataLength }).map((_, index) => (
        <View
          key={index}
          style={
            activeIndex === index ? styles.activeDividerDot : styles.dividerDot
          }
        />
      ))}
    </View>
  );
};

export default PaginationDivider;

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    gap: widthPixel(8),
  },
  dividerDot: {
    paddingVertical: heightPixel(4),
    paddingHorizontal: widthPixel(6),
    borderRadius: widthPixel(32),
    backgroundColor: COLORS.app_CACCD7,
  },
  activeDividerDot: {
    paddingVertical: heightPixel(4),
    paddingHorizontal: widthPixel(10),
    borderRadius: widthPixel(32),
    backgroundColor: COLORS.app_111D5F,
  },
});
