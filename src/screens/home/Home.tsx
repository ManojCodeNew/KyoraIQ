import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import AppText from '../../components/ui/text/AppText';
import PerfectImage from '../../components/ui/image/PerfectImage';
import { IMAGES } from '../../config/image';

const Home = () => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <AppText textContent="Home" variant="title" />
        <PerfectImage
          variant="headerLogo"
          imagePath={IMAGES.img_profile}
          fallBackImage={IMAGES.img_apple}
          showLoader={true}
        />
      </View>
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
