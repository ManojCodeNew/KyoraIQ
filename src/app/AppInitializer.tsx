import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { initializeApp } from './initializeApp';

const AppInitializer = () => {
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AppInitializer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
