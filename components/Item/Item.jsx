
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
  itemTitle: {
    fontFamily: 'OpenSansBold',
  }
});

const Item = (props) => {
    const {desc, image} = props;
    return (
        <View style={styles.container}>
        <Text style={styles.itemTitle}>{desc}</Text>
        <Image
            style={styles.item}
            source={image}
        />
        </View>
    );
}

export default Item;