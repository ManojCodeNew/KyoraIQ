import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppSearchBar from '../../../components/home/AppSearchBar';

const ConsultantListScreen = () => {
  return (
    <View style={styles.container}>
      <AppSearchBar placeholderText="Search" iconType="back" />
    </View>
  );
};

export default ConsultantListScreen;

const styles = StyleSheet.create({
  container: {},
});
