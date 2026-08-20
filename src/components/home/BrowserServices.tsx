import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPixel } from '../../config/responsive';
import GlobalSectionHeader from './GlobalSectionHeader';
import { services } from '../../config/data';
import RenderBrowserServices from './RenderBrowserServices';

const BrowserServices = () => {
  return (
    <View style={styles.listSection}>
      <GlobalSectionHeader title="Browser Services" />
      <FlatList
        data={services}
        renderItem={({ item }) => <RenderBrowserServices service={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.historyCardsContainer}
      />
    </View>
  );
};

export default BrowserServices;

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
  listSection: {
    gap: heightPixel(16),
  },
});
