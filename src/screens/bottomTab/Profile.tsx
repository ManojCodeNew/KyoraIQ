import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import AppText from '../../components/ui/text/AppText';

const Profile = () => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <AppText textContent="Profile" variant="title" />
      </View>
    </SafeScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
