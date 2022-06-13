import React from 'react';
import { StyleSheet, Button, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {

  return (
    // SafeAreaView only works for iOS not Android
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => console.log(`Button Pressed`)} />
    </SafeAreaView>
  );
}

// CTRL SPACE shows all your autocomplete options
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // The height of status bars switches from android to android
    // so using status bar for height adjustment is better than 
    // just the number 20. 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
