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
            <Text>¡ATENCION!</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>¿Estas seguro que quieres borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButtonFrame}>
            <View style={styles.modalButton}><Button  onPress={ () => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' /> </View>
            <View style={styles.modalButton}><Button style={styles.modalButton} onPress={ () => onHandlerCancel()} title='Cancelar' /></View>
            
            {/* <Button  onPress={ () => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
            <Button style={styles.modalButton} onPress={ () => onHandlerCancel()} title='Cancelar' /> */}
          </View> 
        </View>
      </View> 
    </Modal>
  )
}

const styles = StyleSheet.create({
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
      padding: 45,
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
      fontSize: 24,
      marginBottom: 15
    },
    modalMessage : {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalButtonFrame: {
      width: 220,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // marginTop: 15
    },
    modalButton: {
      width:100,
      borderRadius: 15
    },
    modalItem: {
      fontSize:  30
    }
    
  });

export default ModalCustom;