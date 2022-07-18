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
        <View  style={styles.modalView}>         
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
      </View> 
    </Modal>
  )
}

const styles = StyleSheet.create({
    //  modal : {
    //   borderColor: 'black',
    //   backgroundColor: 'white',
    //   width: '80%',
    //   height: '50%',
    //   borderRadius: 10,
    //   padding: '10%',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   flexDirection: 'column'
    // },

    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
  
    modalTitle : {
      backgroundColor: 'grey',
      color: 'white',
      fontSize: 18
    },
    modalMessage : {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
    },
    modalItem: {
      fontSize:  30
    }
    
  });

export default ModalCustom;