import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../../constants/Colors';

import Item from '../Item/Item';
// import {products} from '../../database/products';
import ModalCustom from '../ModalCustom/ModalCustom';
import imageDefault from "../../images/default.jpg";



const ItemListAdmin = (props) => {
    // const {setNavigateTo} = props;
    const {setNavigateTo, itemList, setItemList} = props;


  const [textItem, setTextItem] = useState ('');
//   const [itemList, setItemList] = useState ([]);
//   const [itemList, setItemList] = useState (products);


  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerSetTextItem = (text) => setTextItem(text);

  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, {id: Date.now(), value: textItem, image: imageDefault}]);
    setTextItem('');
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerCancel = () => {
    setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }
  const loadDataOnlyOnce = () => {
    products.map(obj => setItemList(currentItems => [...currentItems, {id: obj.idProduct, value: obj.alt, image: obj.image}])); 
    console.log(itemList);
  }

//   useEffect(()=>{ // se ejecuta al cargar el componente
//     loadDataOnlyOnce(); 
//     console.log('se cargó el componente ItemListAdmin');
//   }, []);
//   useEffect(()=>{ // se ejecuta cada vez que se cambia alguna de las variables dentro de los corchetes
//     console.table('Se cambió el itemList -->' + JSON.stringify(itemList));
//   }, [itemList]);

    return (
      <View style={styles.screen}>
        <ModalCustom 
          itemSelected={itemSelected}
          onHandlerDeleteItem={onHandlerDeleteItem}
          onHandlerCancel={onHandlerCancel}
          modalVisible={modalVisible}
        />
        <View>
            <Button
                color= {Colors.button} 
                title='home' 
                onPress={ ()=> setNavigateTo('Landing')}
            />
        </View>      
        <View style={styles.inputContainer}>          
          <TextInput 
            placeholder='Ingrese aquí'
            style={styles.textInput}
            value={textItem}
            onChangeText={onHandlerSetTextItem}
          />
          <Button title='Add' onPress={onHandlerAddItem} disabled={textItem.length <1 ? true: false  }/>
        </View> 
        <FlatList
          data={itemList}
          renderItem={data => (
            <TouchableOpacity onPress={ ()=> onHandlerModal(data.item.id)} >
                <Item 
                    desc={data.item.value}
                    image={data.item.image}
                />
            </TouchableOpacity>
          )}
          keyExtractor= {(item) => item.id}
        />
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen: {
    paddingTop : 20
  },
  inputContainer: {
    marginTop: 5,
    flexDirection:'row', 
    justifyContent:'center'
  },
  textInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: '80%'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'blue',
    marginTop: 20
  },

  modal : {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightgrey'
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
})
export default ItemListAdmin;