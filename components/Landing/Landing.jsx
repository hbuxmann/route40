import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState, useEffect } from 'react';



const Landing = (props) => {

    const {setNavigateTo} = props;

    return (
        <View>
            <View style={styles.screen}>
            <View style={styles.modalButtonFrame}>
                <View style={styles.modalButton}>
                    <Button title='Listar' onPress={ ()=> setNavigateTo('ItemList')}/>
                </View>
                <View style={styles.modalButton}>
                    <Button title='Administrar' onPress={ ()=> setNavigateTo('ItemListAdmin')}/>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    screen: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22
    },
    modalButtonFrame: {
      width: 280,
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // marginTop: 15
    },
    modalButton: {
      width:120,
      borderRadius: 15
    },
    
  });
  


export default Landing;