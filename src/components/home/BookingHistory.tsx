import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import GlobalSectionHeader from './GlobalSectionHeader';
import { bookingHistory } from '../../config/data';
import { heightPixel } from '../../config/responsive';
import RenderBookingHistory from './RenderBookingHistory';

const BookingHistory = () => {
  return (
    <View style={styles.carouselSection}>
      <GlobalSectionHeader
        title="Booking History"
        onViewAllPress={() => ''}
        viewAllText="View all"
      />
      <FlatList
        data={bookingHistory}
        renderItem={({ item }) => <RenderBookingHistory history={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bookingHistoryFlatList}
        contentContainerStyle={styles.historyCardsContainer}
      />
    </View>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  carouselSection: {
    gap: heightPixel(16),
  },
  bookingHistoryFlatList: {
    marginRight: -8,
  },
  historyCardsContainer: {
    gap: heightPixel(12),
  },
});
