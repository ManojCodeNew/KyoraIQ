import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../../components/ui/backButton/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from '../../types/navigator.types';

const Home = ({
  navigation,
}: NativeStackScreenProps<RootNativeStackParamList>) => {
  //   const handleBack = () => {
  //     navigation.goBack();
  //   };
  return (
    <View>
      {/* <BackButton onBack={handleBack} /> */}
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
