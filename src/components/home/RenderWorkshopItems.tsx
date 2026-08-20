import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';
import AppImage from '../ui/image/AppImage';
import { ICONS } from '../../config/icon';
import { WorkshopDetails } from '../../config/data';
import GlobalCard from '../ui/globalCard/GlobalCard';
import AppText from '../ui/text/AppText';

const RenderWorkshopItems = ({
  workshopItems,
}: {
  workshopItems: WorkshopDetails;
}) => {
  return (
    <GlobalCard fullWidth={false} key={workshopItems.id}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileDetailsContainer}>
            <AppText
              textContent={
                workshopItems.title.trim().length >= 25
                  ? `${workshopItems.title.slice(0, 25)}...`
                  : workshopItems.title
              }
              variant="btnText"
              textStyle={styles.profileName}
            />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.serviceDisplayContainer}>
            <AppImage imagePath={ICONS.ic_bag} variant="smallIcon" />
            <AppText textContent={workshopItems.date} />
          </View>
          <View style={styles.amountDisplayContainer}>
            <AppImage imagePath={ICONS.ic_money} variant="smallIcon" />
            <AppText
              textContent={`${workshopItems.startTime} - ${workshopItems.endTime}`}
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

export default RenderWorkshopItems;

const styles = StyleSheet.create({
  cardContainer: {
    gap: widthPixel(16),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
