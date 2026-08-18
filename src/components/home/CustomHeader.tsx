import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import LinearGradient from 'react-native-linear-gradient';
import { heightPixel, widthPixel } from '../../config/responsive';

const CustomHeader = () => {
  return (
    <LinearGradient
      colors={['#D9DEFA', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.headerGradient}
    >
      <View style={styles.headerContainer}>
        <View style={styles.profileRow}>
          <View style={styles.profileContent}>
            <AppText textContent="Profile" />
          </View>
          <View>
            <AppText textContent="Profile" />
          </View>
        </View>
        <View style={styles.searchRow}>
          <AppText textContent="Search" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerGradient: {
    paddingTop: heightPixel(44),
  },
  headerContainer: {
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(12),
    gap: heightPixel(20),
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContent: {},
});
