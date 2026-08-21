import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../config/responsive';
import { COLORS } from '../../config/colors';
import AppImage from '../ui/image/AppImage';
import AppTextInput from '../ui/textInput/AppTextInput';
import { ICONS } from '../../config/icon';
import BackButton from '../ui/backButton/BackButton';

interface AppSearchBarParams {
  iconType?: 'search' | 'back';
  placeholderText: string;
}

const AppSearchBar = ({
  iconType = 'search',
  placeholderText,
}: AppSearchBarParams) => {
  const isSearchIcon = iconType === 'search';
  return (
    <View style={styles.searchContainer}>
      {isSearchIcon ? (
        <AppImage imagePath={ICONS.ic_search} />
      ) : (
        <BackButton
          onBack={() => ''}
          buttonColor={COLORS.app_000000}
          position="static"
        />
      )}
      <AppTextInput
        placeholderText={placeholderText}
        textInputStyle={styles.searchBar}
      />
    </View>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(300),
    height: heightPixel(48),
    borderRadius: widthPixel(12),
    backgroundColor: COLORS.app_FFFFFF,
    borderWidth: 0.5,
    borderColor: COLORS.app_E3E3E3,
    paddingHorizontal: widthPixel(12),
    ...Platform.select({
      ios: {
        shadowColor: COLORS.app_000000,
        shadowOffset: { width: widthPixel(0), height: heightPixel(2) },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  searchBar: {
    borderColor: 'none',
    borderWidth: widthPixel(0),
  },
});
