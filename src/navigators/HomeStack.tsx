import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigator.types';
import HomeScreen from '../screens/bottomTab/home/HomeScreen';
import WorkshopScreen from '../screens/bottomTab/home/WorkshopScreen';
import ConsultantListScreen from '../screens/bottomTab/home/ConsultantListScreen';
import { getServiceName } from '../utils/getServiceName';

const Stack = createNativeStackNavigator<HomeStackParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Workshop"
        component={WorkshopScreen}
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ConsultantList"
        component={ConsultantListScreen}
        options={({ route }) => ({
          title: getServiceName(route.params.serviceID),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
