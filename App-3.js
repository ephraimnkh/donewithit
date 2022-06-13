import { StatusBar } from 'expo-status-bar';
import React from 'react';
// Alert isn't a component with a visual representation but rather an
// api.
import { StyleSheet, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {

  return (
    // array can be passed to style [styles.container, containerStyle]
    // New objects take precedence over older objects
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        onPress={() => console.log(`Button Pressed`)} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: `orange` };

// Using StyleSheet.create() watches code to make sure it's valid
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
