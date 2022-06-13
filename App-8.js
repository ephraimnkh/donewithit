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
        // flexBasis: 100, // works on main axis so here it's width | horizontal. Hence no change from width 100
        // flexGrow: 1, // flexGrow is like flex 
        // width: 100,
        width: 400,
        flexShrink: 1, // same as flex: -1 as flex is a shorthand. says hey if overflowing shrink me.
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
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
