import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import GlobalSectionHeader from './GlobalSectionHeader';
import { services } from '../../config/data';
import RenderBrowserServices from './RenderBrowserServices';

interface BrowseServicesParams {
  onViewAllPress?: () => void;
  listHeaderComponents: React.ReactElement;
}

const BrowseServices = ({
  listHeaderComponents,
  onViewAllPress,
}: BrowseServicesParams) => {
  return (
    <FlatList
      data={services}
      renderItem={({ item }) => <RenderBrowserServices service={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          {listHeaderComponents}
          <GlobalSectionHeader
            title="Browser Services"
            onViewAllPress={onViewAllPress}
          />
        </>
      }
      showsVerticalScrollIndicator={false}
      initialNumToRender={18}
      maxToRenderPerBatch={18}
      windowSize={17}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default BrowseServices;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(12),
    gap: heightPixel(12),
  },
});
