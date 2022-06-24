import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import theme from '../theme';

function TopBar() {
  return (
    <View style={styles.topBarStyles}>
      <SvgUri uri="../assets/menu.svg" />
      <Text style={styles.heading}>Ecommerce Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBarStyles: {
    backgroundColor: theme.colors.primaryBg,
    paddingVertical: 16,
  },
  heading: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.topBarHeading,
    fontFamily: theme.fonts.topBar,
    alignSelf: 'center',
  },
});

export default TopBar;
