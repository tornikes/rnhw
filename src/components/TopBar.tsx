import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import Burger from '../assets/Burger.svg';
import Cart from '../assets/Cart.svg';

function TopBar() {
  return (
    <View style={styles.topBarStyles}>
      <Burger height="13" width="17" />
      <Text style={styles.heading}>Ecommerce Store</Text>
      <Cart height="20" width="20" />
    </View>
  );
}

const styles = StyleSheet.create({
  topBarStyles: {
    backgroundColor: theme.colors.primaryBg,
    paddingVertical: 16,
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
