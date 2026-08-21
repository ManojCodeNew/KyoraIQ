import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/home/CustomHeader';
import { COLORS } from '../../../config/colors';
import { heightPixel } from '../../../config/responsive';
import { useAuthContext } from '../../../context/AuthContextProvider';
import BookingHistory from '../../../components/home/BookingHistory';
import BrowseServices from '../../../components/home/BrowseServices';
import Workshop from '../../../components/home/Workshop';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../types/navigator.types';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'Home'>) => {
  const { authState } = useAuthContext();

  const onWorkshopViewAllPress = () => {
    navigation.navigate('Workshop');
  };

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
            {authState.userType === 'pro' && (
              <Workshop onViewAllPress={onWorkshopViewAllPress} />
            )}
            <BookingHistory />
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;

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
