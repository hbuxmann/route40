import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CART } from '../../../database/CART'
import {CartItem} from '../../../components/CartItem/CartItem';

const CartScreen = () => {

  const items = CART
  const total = 12000;

  const handleConfirmCart = () => {
    console.log('Confirmar pedido');
  } 
  const handlerDeleteCart = () => {
    console.log('Eliminar pedido');
  }

  const renderItems = ({item}) => {
    return (
      <CartItem item={item} onDelete={handlerDeleteCart} />
      // <Text>{console.log('renderItem')}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSansBold',
    padding: 8,
  }
})


export default CartScreen