import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';

export default function App() {
  // Dimensions.get() takes "window"| "screen" as input.
  // On iOS they are the same but on Android they are different.
  // Window is a little smaller than screen - Android.
  console.log(Dimensions.get("screen"))

  return (
    // SafeAreaView only works for iOS not Android
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: `dodgerblue`,
        // Input here is Density-Independent Pixels (dip)
        // Actual Size (Physical Pixels) 
        // = DIPs x Scale Factor of the device
        // To make exact values use % in '' as it is a string
        width: `50%`,
        height: 70
      }}></View>
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
