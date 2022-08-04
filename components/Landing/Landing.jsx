import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
// import { useState, useEffect } from 'react';


const Landing = ({navigation, route}, props) => {

  // const {itemList} = route.params;

    // const {setNavigateTo} = props;
    console.log('Landing-->'+JSON.stringify(navigation));
    console.log('Landing!!!'+JSON.stringify(route));
    // console.log('Landing!!!'+route.options.name);


    return (
        <View>
            <View style={styles.screen}>
            <View style={styles.modalButtonFrame}>
                <View style={styles.modalButton}>
                    {/* <Button title='Listar' onPress={ ()=> setNavigateTo('ItemList')}/> */}
                    <Button title='Listar' onPress={ ()=> navigation.navigate('List' , {nombre : 'nombre ingresado'})}/>
                    {/* <Text>Hola mundo</Text> */}
                </View>
                <View style={styles.modalButton}>
                    {/* <Button title='Administrar' onPress={ ()=> setNavigateTo('ItemListAdmin')}/> */}
                    <Button title='Administrar' onPress={ ()=> navigation.navigate('Admin')}/>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    screen: {
      flex: 1,
      marginTop: 30,
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