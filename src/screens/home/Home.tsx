import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/home/CustomHeader';
import { COLORS } from '../../config/colors';
import { heightPixel, widthPixel } from '../../config/responsive';
import { useAuthContext } from '../../context/AuthContextProvider';
import BookingHistory from '../../components/home/BookingHistory';
import BrowserServices from '../../components/home/BrowserServices';
import Workshop from '../../components/home/Workshop';

const Home = () => {
  const { authState } = useAuthContext();

  return (
    <View style={styles.homeContainer}>
      <CustomHeader authState={authState} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled
      >
        <Workshop />
        <BookingHistory />
        <BrowserServices />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },
  contentContainer: {
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(12),
    gap: heightPixel(24),
  },
});
