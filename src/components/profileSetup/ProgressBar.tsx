import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Text>ProgressBar</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
