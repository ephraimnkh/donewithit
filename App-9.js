import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: `row`,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        top: 20, // move block 20 pixels from the top (not top of screen though nut top of wherever containing block is). negative values work too. bottom, left, right 
        position: "absolute", //relative default. absolute breaks initial layout, so related objects change they won't stay the same.
      }}
      />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }}
      />
    </View>
  );
}
