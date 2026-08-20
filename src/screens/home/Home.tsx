import { FlatList, Pressable, StyleSheet, View } from 'react-native';
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
import AppImage from '../../components/ui/image/AppImage';
import FastImage from '@d11/react-native-fast-image';
import { ICONS } from '../../config/icon';

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
        <View style={styles.cardContainer}>
          <View style={styles.profileContainer}>
            <AppImage
              imagePath={{
                uri: history.provider.avatar,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.web,
              }}
              variant="smallProfile"
            />
            <View style={styles.profileDetailsContainer}>
              <AppText
                textContent={history.provider.name}
                variant="btnText"
                textStyle={styles.profileName}
              />
              <AppText textContent={history.date} variant="caption" />
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.serviceDisplayContainer}>
              <AppImage imagePath={ICONS.ic_bag} variant="smallIcon" />
              <AppText textContent={history.service.name} />
            </View>
            <View style={styles.amountDisplayContainer}>
              <AppImage imagePath={ICONS.ic_money} variant="smallIcon" />
              <AppText
                textContent={`${history.amount.currency} ${history.amount.value}`}
              />
            </View>
          </View>
          <View>
            <Pressable>
              <AppImage imagePath={ICONS.ic_message} variant="mediumIcon" />
            </Pressable>
          </View>
        </View>
      </GlobalCard>
    );
  };

  const renderBrowserServices = (history: BookingHistory) => {
    return (
      <GlobalCard fullWidth={true} key={history.id}>
        <AppText textContent={history.provider.name} />
        <AppText textContent="hello" />
        <AppText textContent="hello" />
      </GlobalCard>
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
            contentContainerStyle={styles.historyCardsContainer}
          />
        </View>

        <View style={styles.listSection}>
          <GlobalSectionHeader title="Browser Services" />
          <FlatList
            data={bookingHistory}
            renderItem={({ item }) => renderBrowserServices(item)}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.historyCardsContainer}
          />
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
  cardContainer: {
    gap: widthPixel(16),
  },
  profileContainer: {
    flexDirection: 'row',
    gap: widthPixel(8),
  },
  profileDetailsContainer: {
    gap: widthPixel(2),
  },
  profileName: {
    color: COLORS.app_212121,
  },
  detailsContainer: {
    gap: widthPixel(6),
  },
  serviceDisplayContainer: { flexDirection: 'row', gap: widthPixel(8) },
  amountDisplayContainer: { flexDirection: 'row', gap: widthPixel(8) },
});
