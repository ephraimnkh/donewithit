// install npm i @react-native-community/hooks - 
// helps with work based on device orientation
// useDimensions helps to get accurate dimensions in 
// portrait and landscape mode as the default dimensions 
// API only works with portrait.
// useDimensions is preferred if you support multiple dimensions

import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// app.json orientation is where app can be allowed different modes
// options are "portrait", "landscape" or "default" for both.
// App reloads on all orientation changes.
export default function App() {
  // console.log(useDimensions());
  // Returns object with booleans for landscape and portrait
  // console.log(useDeviceOrientation());
  // To pick a certain value from a json object use { landscape }
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: `dodgerblue`,
        width: `100%`,
        height: landscape ? `100%` : `30%`
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
