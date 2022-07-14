
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

const Item = (props) => {
    

    const {desc, image} = props;
    // const sourceImage = "../../images/"+image;
    // let staticImage = require(sourceImage);
    // const staticImage = require(image);
    // console.log(image);
    // console.log(sourceImage);


  return (
    <View style={styles.container}>
      <Text>{desc}</Text>
      <Image
        style={styles.item}
        // source={require('@expo/assets/adaptive-icon.png')}
        // source={require('../../images/cbr300.jpg')}
        source={image}

        // source={staticImage}

      />
    </View>
  );
}

export default Item;