import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { initializeApp } from './initializeApp';
import BootSplash from 'react-native-bootsplash';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';

const AppInitializer = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  useEffect(() => {
    (async () => {
      try {
        const initializerResult = await initializeApp();
        if (initializerResult.isAuthenticated) {
          navigation.replace('Home');
        } else {
          console.log('Not Authenticated');
        }
      } catch (error) {
        console.log(error);
      } finally {
        await BootSplash.hide({ fade: true });
      }
    })();
  }, [navigation]);

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
