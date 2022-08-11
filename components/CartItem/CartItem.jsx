import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
// import { COLORS } from '../../constants/colors'

export const CartItem = ({ item, onDelete}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={StyleSheet.header}>{item.prodName}</Text>
      </View>
      <View style={styles.detail}>
        <View>
            <Text>Cantidad: {item.stock}</Text>
            <Text>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            {/* <Ionicons name='trash' color={COLORS.accent} /> */}
            <Ionicons name='trash' />

        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'OpenSansBold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans'
    }
})