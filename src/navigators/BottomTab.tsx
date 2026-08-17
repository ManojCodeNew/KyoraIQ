import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../types/navigator.types';
import Home from '../screens/home/Home';
import History from '../screens/home/History';
import Chat from '../screens/home/Chat';
import Profile from '../screens/home/Profile';
import { COLORS } from '../config/colors';
import { fontPixel, heightPixel } from '../config/responsive';
import IconProvider from '../components/tabBar/IconProvider';
import { fontFamilies } from '../config/font';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.app_111D5F,
          height: heightPixel(92),
          paddingTop: heightPixel(13),
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilies.InterTight.regular,
          fontSize: fontPixel(12),
          fontWeight: '400',
        },
        tabBarInactiveTintColor: COLORS.app_FFFFFFD9,
        tabBarActiveTintColor: COLORS.app_FFFFFF,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            IconProvider({ focused, icon_label: 'home' }),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) =>
            IconProvider({ focused, icon_label: 'history' }),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) =>
            IconProvider({ focused, icon_label: 'chat' }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            IconProvider({ focused, icon_label: 'profile' }),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
