import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../components/ui/text/AppText';

const FirstIntro = () => {
  return (
    <View style={styles.main}>
      <AppText textContent="Sample" variant="title" />
      <AppText textContent="Sample" variant="body" />
    </View>
  );
};

export default FirstIntro;

const styles = StyleSheet.create({
  main: {},
});
