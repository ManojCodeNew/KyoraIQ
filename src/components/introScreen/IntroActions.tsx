import { StyleSheet, View } from 'react-native';
import AppText from '../ui/text/AppText';
import AppButton from '../ui/button/AppButton';
import { COLORS } from '../../config/colors';
import { fontPixel, widthPixel } from '../../config/responsive';
import AppImage from '../ui/image/AppImage';
import { IMAGES } from '../../config/image';

interface IntroActionsProps {
  onNext: () => void;
  index: number;
  onSkip: () => void;
  dataLength: number;
}

const IntroActions = ({
  onNext,
  index,
  onSkip,
  dataLength,
}: IntroActionsProps) => {
  const isLastPage = index === dataLength;
  return (
    <View style={styles.actionsContainer} key={index}>
      {!isLastPage && (
        <AppButton
          variant="primary"
          onClick={() => onSkip()}
          buttonStyle={styles.skipButton}
        >
          <AppText textContent="Skip" variant="btnText" />
        </AppButton>
      )}

      <AppButton
        variant="primary"
        onClick={() => onNext()}
        buttonStyle={isLastPage ? styles.fullWidthButton : styles.nextButton}
      >
        <AppText
          textContent={isLastPage ? 'Get Started' : 'Next'}
          variant="btnText"
          textStyle={styles.nextBtnTextStyle}
        />

        {isLastPage && (
          <AppImage
            variant="arrow"
            imagePath={IMAGES.img_right_arrow}
            showLoader={false}
            imageStyle={styles.rightArrow}
            tintColor={COLORS.app_FFFFFF}
          />
        )}
      </AppButton>
    </View>
  );
};

export default IntroActions;

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    gap: widthPixel(12),
  },
  skipButton: {
    flex: 1,
    backgroundColor: COLORS.app_F5F6FB,
  },
  nextButton: {
    flex: 1,
    backgroundColor: COLORS.app_111D5F,
  },
  fullWidthButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.app_111D5F,
  },
  rightArrow: {
    fontSize: fontPixel(20),
    position: 'absolute',
    right: widthPixel(12),
  },
  nextBtnTextStyle: {
    color: COLORS.app_FFFFFF,
  },
  rightArrowButton: {
    tintColor: COLORS.app_FFFFFF,
  },
});
