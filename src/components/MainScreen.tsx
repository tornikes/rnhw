import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TopBar from './TopBar';
import MGlass from '../assets/MagnifyingGlass.svg';

function MainScreen() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View>
      <TopBar />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MGlass width={17} height={17} />
          <TextInput
            maxLength={50}
            style={styles.inputStyles}
            onChangeText={setSearchInput}
            defaultValue={searchInput}
          />
        </View>
      </View>
      <Text>This is the main screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 35,
    paddingVertical: 28,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingLeft: 15,
  },
  inputStyles: {
    marginLeft: 5,
    flexGrow: 1,
    overflow: 'hidden',
  },
});

export default MainScreen;
