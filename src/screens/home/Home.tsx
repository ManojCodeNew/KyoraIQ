import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeScreen from '../../components/ui/safeScreen/SafeScreen';
import AppText from '../../components/ui/text/AppText';

const Home = () => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <AppText textContent="Home" variant="title" />
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
