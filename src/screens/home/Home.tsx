import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../components/ui/text/AppText';
import PerfectImage from '../../components/ui/image/PerfectImage';
import { IMAGES } from '../../config/image';
import CustomHeader from '../../components/home/CustomHeader';
import { COLORS } from '../../config/colors';
import { heightPixel, widthPixel } from '../../config/responsive';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <CustomHeader />

      <View style={styles.contentContainer}>
        <AppText textContent="Home" variant="title" />
        <ScrollView horizontal scrollToOverflowEnabled>
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
          <PerfectImage
            variant="headerLogo"
            imagePath={IMAGES.img_profile}
            fallBackImage={IMAGES.img_apple}
            showLoader={true}
          />
        </ScrollView>
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
  },
});
