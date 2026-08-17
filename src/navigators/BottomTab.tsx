import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../types/navigator.types';
import Home from '../screens/home/Home';
import History from '../screens/home/History';
import Chat from '../screens/home/Chat';
import Profile from '../screens/home/Profile';
import { COLORS } from '../config/colors';
import { heightPixel } from '../config/responsive';
import AppImage from '../components/ui/image/AppImage';
import { IMAGES } from '../config/image';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.app_111D5F,
          height: heightPixel(92),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
          
          ),
        }}
      />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTab;
