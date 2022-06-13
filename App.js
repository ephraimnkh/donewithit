import React from 'react';
import { View } from 'react-native';
import { WelcomeScreen } from './app/screens/WelcomeScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';

export default function App() {
  let page = 'page'
  let componentToDisplay;
  if (page == 'welcome') {
    componentToDisplay = <WelcomeScreen />;
  }
  if (page == 'view-image') {
    componentToDisplay = <ViewImageScreen />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ViewImageScreen />
    </View>
  );
}
