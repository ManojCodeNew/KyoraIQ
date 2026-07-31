import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../types/navigator.types';
import AppInitializer from '../app/initializers/AppInitializer';
import IntroScreen from '../screens/intro/IntroScreen';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initializer"
        component={AppInitializer}
        options={{ headerShown: false, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
