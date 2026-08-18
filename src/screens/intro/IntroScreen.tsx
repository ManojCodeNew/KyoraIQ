import { StyleSheet, View } from 'react-native';
import { widthPixel } from '../../config/responsive';
import IntroSlide from '../../components/introScreen/IntroSlide';
import { useState } from 'react';
import PaginationDivider from '../../components/introScreen/PaginationDivider';
import IntroActions from '../../components/introScreen/IntroActions';
import { INTRO_DATA } from '../../config/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';

const IntroScreen = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentSlideIndex >= INTRO_DATA.length) {
      return;
    }

    if (currentSlideIndex + 1 === INTRO_DATA.length) {
      navigation.navigate('Login');
      return;
    }
    setCurrentSlideIndex(currentSlideIndex + 1);
    navigation.navigate('Intro');
    return;
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeScreen edges={['top']}>
      <View style={styles.contentContainer}>
        <IntroSlide item={INTRO_DATA[currentSlideIndex]} />

        <PaginationDivider
          activeIndex={currentSlideIndex}
          dataLength={INTRO_DATA.length}
        />

        <IntroActions
          index={currentSlideIndex}
          onNext={handleNext}
          onSkip={handleSkip}
          dataLength={INTRO_DATA.length - 1}
        />
      </View>
    </SafeScreen>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    gap: widthPixel(32),
  },
});
