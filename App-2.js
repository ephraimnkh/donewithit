import { StatusBar } from 'expo-status-bar';
import React from 'react';
// Alert isn't a component with a visual representation but rather an
// api.
import { StyleSheet, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Button uses self-closing syntax as nothing is inserted */}
      {/* <Button
        color="orange"
        title="Click Me"
        onPress={() => Alert.alert(`My Title`, `My message`, [
          { text: `Yes`, onPress: () => console.log(`Yes`) },
          { text: `No`, onPress: () => console.log(`No`) }
        ])} /> */}
      {/* Alert.prompt only works on iOS */}
      <Button
        title="Click Me"
        onPress={() => Alert.prompt(`My Title`, `My message`, text => console.log(text))} />
    </SafeAreaView>
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
