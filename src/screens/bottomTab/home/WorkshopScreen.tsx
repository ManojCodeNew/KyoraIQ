import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { workshops } from '../../../config/data';
import RenderWorkshopItems from '../../../components/home/RenderWorkshopItems';
import { COLORS } from '../../../config/colors';
import { heightPixel, widthPixel } from '../../../config/responsive';

const WorkshopScreen = () => {
  return (
    <FlatList
      data={workshops}
      renderItem={({ item }) => (
        <RenderWorkshopItems workshopItems={item} fullWidth={true} />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      style={styles.workshopListContainer}
      contentContainerStyle={styles.workshopContentContainer}
    />
  );
};

export default WorkshopScreen;

const styles = StyleSheet.create({
  workshopListContainer: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },
  workshopContentContainer: {
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(12),
    gap: heightPixel(12),
  },
});
