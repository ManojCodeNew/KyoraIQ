import { isIOS } from '../utils/platformUtil';

export const fontFamilies = {
  InterTight: {
    semiBold: isIOS() ? 'InterTight-SemiBold' : 'InterTightSemiBold',
    regular: isIOS() ? 'InterTight-Regular' : 'InterTightRegular',
  },
};
