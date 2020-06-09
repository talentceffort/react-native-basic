import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const add = 3;

  const obj = {
    a: 3,
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
