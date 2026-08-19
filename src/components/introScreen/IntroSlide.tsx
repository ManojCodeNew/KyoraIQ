import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import AppImage, { AppImageSource } from '../ui/image/AppImage';
import { widthPixel } from '../../config/responsive';

interface IntroSlideType {
  id: number;
  title: string;
  description: string;
  imagePath: AppImageSource;
  buttonTitle: string;
}

const IntroSlide = ({ item }: { item: IntroSlideType }) => {
  return (
    <View key={item.id}>
      <View style={styles.imageContainer}>
        <AppImage
          imagePath={item.imagePath}
          showLoader={true}
          variant="introThumbnail"
        />
      </View>
      <View style={styles.textContainer}>
        <AppText textContent={item.title} variant="title" />
        <AppText
          textContent={item.description}
          variant="body"
          textStyle={styles.bodyTextStyle}
        />
      </View>
    </View>
  );
};

export default IntroSlide;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },

  textContainer: {
    alignItems: 'center',
    gap: widthPixel(12),
  },
  bodyTextStyle: {
    textAlign: 'center',
  },
});
