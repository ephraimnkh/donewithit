import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  // Coding convensions dictate that functions are prefixed with handle*
  const handlePress = () => console.log(`Text Pressed`)

  return (
    <SafeAreaView style={styles.container}>
      {/* numberOfLines={1} changes text to be on one long line */}
      <Text onPress={handlePress}>Hello React Native.</Text>
      {/* Can use self closing syntax since nothing will be added in the image */}
      {/* Require returns the number reference to the image */}
      {/* <Image source={require(`./assets/favicon.png`)} /> */}
      {/* Network images don't work without dimensions. */}
      {/* resizeMode is used when loaded image does not match dimensions */}
      {/* Image doesn't have onPress but you can make any component touchable with 
      touchable */}
      {/* onPress works on touchable and also onLongPress for more
      User interactions */}
      {/* TouchableOpacity Reduces opacity of object being touched */}
      {/* TouchableHighlight darkens background */}
      {/* Android has special touchable called TouchableNativeFeedback. 
      Doesn't work with image so using view */}
      <TouchableNativeFeedback onPress={() => console.log(`Image Tapped`)}>
        {/* Can move code by holding alt and the selected code will move */}
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
        {/* <Image
          // blurRadius={10}
          fadeDuration={3000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} /> */}
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Make Content be in the center.
    alignItems: 'center',
    justifyContent: 'center',
  },
});
