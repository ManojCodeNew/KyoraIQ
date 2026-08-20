import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { BookingHistory } from '../../config/data';
import GlobalCard from '../ui/globalCard/GlobalCard';
import AppImage from '../ui/image/AppImage';
import FastImage from '@d11/react-native-fast-image';
import AppText from '../ui/text/AppText';
import { ICONS } from '../../config/icon';
import { widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';

const RenderBookingHistory = ({ history }: { history: BookingHistory }) => {
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

export default RenderBookingHistory;

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
