
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  item: {
    width: 200,
    height: 140,
    borderRadius: 5,
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Text>Honda CBR 300R</Text>
      <Image
        style={styles.item}
        // source={require('@expo/assets/adaptive-icon.png')}
        source={require('../../images/cbr300.jpg')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;