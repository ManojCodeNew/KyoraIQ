import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../components/ui/text/AppText';
import CustomHeader from '../../components/home/CustomHeader';
import { COLORS } from '../../config/colors';
import { heightPixel, widthPixel } from '../../config/responsive';
// import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../../context/AuthContextProvider';
import GlobalSectionHeader from '../../components/home/GlobalSectionHeader';
import GlobalCard from '../../components/ui/globalCard/GlobalCard';
import { bookingHistory } from '../../config/data';

export interface BookingHistory {
  id: string;
  provider: {
    id: string;
    name: string;
    avatar: string;
  };
  date: string;
  service: {
    id: string;
    name: string;
  };
  amount: {
    value: number;
    currency: string;
  };
  status: string;
}

const Home = () => {
  // const { t } = useTranslation();
  const { authState } = useAuthContext();

  const renderBookingHistory = (history: BookingHistory) => {
    return (
      <GlobalCard fullWidth={false} key={history.id}>
        <AppText textContent={history.provider.name} />
        <AppText textContent="hello" />
        <AppText textContent="hello" />
      </GlobalCard>
      // </View>
    );
  };
  return (
    <View style={styles.homeContainer}>
      <CustomHeader authState={authState} />

      <View style={styles.contentContainer}>
        {/* <AppText
          textContent={t('greeting.welcome', {
            username: authState.user.profile.name,
          })}
          variant="title"
        /> */}
        <View style={styles.carouselSection}>
          <GlobalSectionHeader
            title="Booking History"
            onViewAllPress={() => ''}
            viewAllText="View all"
          />
          <FlatList
            data={bookingHistory}
            renderItem={({ item }) => renderBookingHistory(item)}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.bookingHistoryFlatList}
            // lis
          />
        </View>

        <View style={styles.listSection}>
          <GlobalSectionHeader
            title="Browser Services"
            onViewAllPress={() => ''}
            viewAllText="View all"
          />

          <GlobalCard fullWidth={true}>
            <AppText textContent="hello" />
            <AppText textContent="hello" />
            <AppText textContent="hello" />
          </GlobalCard>
        </View>
      </View>
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
  carouselSection: {
    gap: heightPixel(16),
  },
  listSection: {
    gap: heightPixel(16),
  },
  bookingHistoryFlatList: {
    marginRight: -8,
  },
  historyCardsContainer: {
    gap: heightPixel(12),
  },
});
