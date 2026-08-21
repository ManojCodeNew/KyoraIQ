import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/home/CustomHeader';
import { COLORS } from '../../config/colors';
import { heightPixel, widthPixel } from '../../config/responsive';
import { useAuthContext } from '../../context/AuthContextProvider';
import BookingHistory from '../../components/home/BookingHistory';
import BrowseServices from '../../components/home/BrowseServices';
import Workshop from '../../components/home/Workshop';

const Home = () => {
  const { authState } = useAuthContext();

  return (
    <View style={styles.homeContainer}>
      <CustomHeader authState={authState} />
      {/* 
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        {authState.userType === 'pro' && <Workshop />}
        <BookingHistory />
        <BrowseServices />
      </ScrollView> */}

      <BrowseServices
        listHeaderComponents={
          <View style={styles.headerSection}>
            {authState.userType === 'pro' && <Workshop />}
            <BookingHistory />
          </View>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },

  headerSection: {
    gap: heightPixel(24),
    marginBottom: heightPixel(24),
  },
});
