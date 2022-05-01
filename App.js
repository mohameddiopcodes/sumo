import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.view}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default HelloWorldApp;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
