import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// width pixel
const widthPixel = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};
// height pixel
const heightPixel = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};
// font pixel
const fontPixel = (size: number): number => {
  const scaledSize = (SCREEN_WIDTH / BASE_WIDTH) * size;
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

export { widthPixel, heightPixel, fontPixel };
