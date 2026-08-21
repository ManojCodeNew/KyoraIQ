import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../types/navigator.types';
import History from '../screens/bottomTab/History';
import Chat from '../screens/bottomTab/Chat';
import Profile from '../screens/bottomTab/Profile';
import { COLORS } from '../config/colors';
import { fontPixel, heightPixel } from '../config/responsive';
import IconProvider from '../components/tabBar/IconProvider';
import { fontFamilies } from '../config/font';
import HomeStack from './HomeStack';

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
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            IconProvider({ focused, icon_label: 'homeStack' }),
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
