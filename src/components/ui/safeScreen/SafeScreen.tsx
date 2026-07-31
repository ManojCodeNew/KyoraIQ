import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { heightPixel, widthPixel } from '../../../config/responsive';
import { COLORS } from '../../../config/colors';

const SafeScreen = ({
  children,
  edges = ['top'],
  safeAreaStyle,
}: {
  children: React.ReactNode;
  edges?: Edges;
  safeAreaStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <SafeAreaView edges={edges} style={[styles.safeArea, safeAreaStyle]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.app_FFFFFF,
  },
  container: {
    flex: 1,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
});
