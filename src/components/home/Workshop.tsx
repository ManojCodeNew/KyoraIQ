import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import GlobalSectionHeader from './GlobalSectionHeader';
import { heightPixel } from '../../config/responsive';
import { workshops } from '../../config/data';
import RenderWorkshopItems from './RenderWorkshopItems';

interface WorkshopParams {
  onViewAllPress: () => void;
}

const Workshop = ({ onViewAllPress }: WorkshopParams) => {
  return (
    <View style={styles.carouselSection}>
      <GlobalSectionHeader
        title="Workshops"
        onViewAllPress={onViewAllPress}
        viewAllText="View all"
      />
      <FlatList
        data={workshops}
        renderItem={({ item }) => <RenderWorkshopItems workshopItems={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bookingHistoryFlatList}
        contentContainerStyle={styles.historyCardsContainer}
      />
    </View>
  );
};

export default Workshop;

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
