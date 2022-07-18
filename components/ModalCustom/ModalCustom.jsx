import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState, useEffect } from 'react';




const ModalCustom = (props) => {

  const {itemSelected, onHandlerDeleteItem, onHandlerCancel, modalVisible} = props;
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
    >        
      <View style={styles.modal}>          
        <View style={styles.modalTitle}>
          <Text>Mi Modal</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>Estas seguro que quieres borrar?</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button onPress={ () => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
          <Button onPress={ () => onHandlerCancel()} title='Cancelar' />
        </View> 
      </View> 
    </Modal>
  )
}

const styles = StyleSheet.create({
     modal : {
      backgroundColor: 'white',
      width: '80%',
      height: '50%',
      borderRadius: 10,
      padding: '10%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column'
    },
  
    modalTitle : {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 18
    },
    modalMessage : {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalButton: {
      marginTop: 15
    },
    modalItem: {
      fontSize:  30
    }
    
  });

export default ModalCustom;