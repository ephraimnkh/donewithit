import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      // flex 1 takes whole screen 0.5 half screen
      flex: 1,
      flexDirection: `row`,
      justifyContent: 'center', // works on main axis which is now "horizontal" after row above
      alignItems: 'center', // on secondary axis which now is vertical | default stretch
      alignContent: 'center', // Differs from alignItems in that it is wholistic not line by line
      flexWrap: 'wrap', // default no-wrap so items will try all fit based on main axis, even if shrinking required. 
      // when wrapping alignItems acts different, it determines alignment on each line for secondary axis
    }}>
      {/* Shift+Alt duplicates highlighted code up/down depending on 
    arrow press */}
      {/* Flex is default vertical on mobile not web */}
      <View style={{
        backgroundColor: 'dodgerblue',
        // flex: 2
        width: 100,
        // height: 100,
        height: 300,
        // alignSelf: 'flex-start'
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        // flex: 1,
        width: 100,
        height: 100,
        // height: 200,
      }}
      />
      <View style={{
        backgroundColor: 'tomato',
        // flex: 1,
        width: 100,
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'grey',
        // flex: 1,
        width: 100,
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'greenyellow',
        // flex: 1,
        width: 100,
        height: 100,
      }}
      />
    </View>
  );
}
