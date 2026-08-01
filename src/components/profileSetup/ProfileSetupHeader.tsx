import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import { widthPixel } from '../../config/responsive';

interface ProfileSetupHeaderProps {
  title: string;
  subTitle: string;
}

const ProfileSetupHeader = ({ subTitle, title }: ProfileSetupHeaderProps) => {
  return (
    <View style={styles.profileSetupHeaderContainer}>
      <AppText textContent={title} variant="title" />
      <AppText textContent={subTitle} variant="body" />
    </View>
  );
};

export default ProfileSetupHeader;

const styles = StyleSheet.create({
  profileSetupHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPixel(8),
  },
});
