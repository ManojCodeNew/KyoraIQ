import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Services } from '../../config/data';
import GlobalCard from '../ui/globalCard/GlobalCard';
import AppImage from '../ui/image/AppImage';
import AppText from '../ui/text/AppText';
import { ICONS } from '../../config/icon';
import { widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';

interface RenderBrowserServicesParams {
  service: Services;
  onServicePress: () => void;
}

const RenderBrowserServices = ({
  service,
  onServicePress,
}: RenderBrowserServicesParams) => {
  return (
    <GlobalCard fullWidth={true} key={service.id} onCardPress={onServicePress}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <AppImage
            imagePath={ICONS[service.avatar]}
            variant="smallProfile"
            imageStyle={styles.serviceAvatar}
          />
          <View style={styles.profileDetailsContainer}>
            <AppText
              textContent={service.name}
              variant="btnText"
              textStyle={styles.profileName}
            />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.serviceDisplayContainer}>
            <AppImage imagePath={ICONS.ic_money} variant="smallIcon" />
            <AppText
              textContent={`${service.amount.currency}${service.amount.value}/${service.amount.time}`}
              variant="caption"
            />
          </View>

          <View style={styles.amountDisplayContainer}>
            <AppImage imagePath={ICONS.ic_tick} variant="smallIcon" />
            <AppText
              textContent={`${service.totalBookings}+ Bookings`}
              variant="caption"
            />
          </View>
        </View>
      </View>
    </GlobalCard>
  );
};

export default RenderBrowserServices;

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
  serviceAvatar: {
    borderRadius: widthPixel(0),
  },
});
