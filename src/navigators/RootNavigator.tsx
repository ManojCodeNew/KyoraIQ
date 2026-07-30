import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../types/navigator.types';
import AppInitializer from '../app/initializers/AppInitializer';
import FirstIntro from '../screens/intro/FirstIntro';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initializer"
        component={AppInitializer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={FirstIntro} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
