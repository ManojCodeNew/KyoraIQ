import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../components/ui/text/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppImage from '../../components/ui/image/AppImage';
import AppButton from '../../components/ui/button/AppButton';
import { IMAGES } from '../../config/image';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';
import { INTRO_DATA } from '../../config/data';

const IntroScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <AppImage
            imagePath={IMAGES.img_intro1.img}
            imageAlt={IMAGES.img_intro1.alt}
            variant="thumbnail"
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <AppText textContent="Connect. Chat. Learn." variant="title" />
            <AppText
              textContent="Discover consultants, book live sessions, and participate in knowledge-rich workshops."
              variant="body"
              textStyle={styles.bodyTextStyle}
            />
          </View>

          <View style={styles.dividerContainer}>
            {INTRO_DATA.map((_, index) => (
              <View key={index} style={styles.dividerDot} />
            ))}
          </View>

          <View style={styles.actionsContainer}>
            <AppButton
              variant="primary"
              onClick={() => ''}
              buttonStyle={styles.skipButton}
            >
              <AppText textContent="Skip" variant="btnText" />
            </AppButton>
            <AppButton
              variant="primary"
              onClick={() => ''}
              buttonStyle={styles.nextButton}
            >
              <AppText
                textContent="Next"
                variant="btnText"
                textStyle={styles.nextBtnTextStyle}
              />
            </AppButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    gap: widthPixel(32),
  },
  textContainer: {
    alignItems: 'center',
    gap: widthPixel(12),
  },
  bodyTextStyle: {
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    gap: widthPixel(8),
  },
  dividerDot: {
    paddingVertical: heightPixel(4),
    paddingHorizontal: widthPixel(6),
    borderRadius: widthPixel(32),
    backgroundColor: COLORS.app_CACCD7,
  },
  activeDividerDot: {
    paddingVertical: heightPixel(4),
    paddingHorizontal: widthPixel(10),
    borderRadius: widthPixel(32),
    backgroundColor: COLORS.app_111D5F,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: widthPixel(12),
  },
  skipButton: {
    backgroundColor: COLORS.app_F5F6FB,
  },
  nextButton: {
    backgroundColor: COLORS.app_111D5F,
  },
  nextBtnTextStyle: {
    color: COLORS.app_FFFFFF,
  },
});
