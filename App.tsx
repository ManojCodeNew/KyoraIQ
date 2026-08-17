import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextProvider } from './src/context/AuthContextProvider';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <RootNavigator />
        </AuthContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
