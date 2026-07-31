import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { heightPixel, widthPixel } from '../../../config/responsive';

const SafeScreen = ({
  children,
  edges = ['top'],
}: {
  children: React.ReactNode;
  edges?: Edges;
}) => {
  return (
    <SafeAreaView edges={edges} style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
});
