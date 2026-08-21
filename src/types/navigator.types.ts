import { NavigatorScreenParams } from '@react-navigation/native';

export type RootNativeStackParamList = {
  Initializer: undefined;
  Intro: undefined;
  Login: undefined;
  Register: undefined;
  RoleSetup: undefined;
  ProfileDetails: undefined;
  TabBar: NavigatorScreenParams<RootBottomTabParamList>;
};

export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  History: undefined;
  Chat: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Workshop: undefined;
  Service: { serviceID: string };
  ConsultantProfile: undefined;
  Search: undefined;
};
