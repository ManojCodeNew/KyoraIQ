import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../types/navigator.types';
import AppInitializer from '../app/initializers/AppInitializer';
import IntroScreen from '../screens/intro/IntroScreen';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ChooseRoleScreen from '../screens/profileSetup/ChooseRoleScreen';
import ProfileDetailsScreen from '../screens/profileSetup/ProfileDetailsScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Initializer">
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
        options={{
          headerShown: false,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        name="RoleSetup"
        component={ChooseRoleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="tabBar"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
