import React from 'react';
import { Text, View } from 'react-native';
import TopBar from './TopBar';

function MainScreen() {
  return (
    <View>
      <TopBar />
      <Text>This is the main screen</Text>
    </View>
  );
}

export default MainScreen;
