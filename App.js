import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState, useEffect } from 'react';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
// import db from './database/products.json';
import {products} from './database/products';
import ModalCustum from './components/ModalCustom/ModalCustom';

export default function App() {

  const [textItem, setTextItem] = useState ('');
  const [itemList, setItemList] = useState ([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerSetTextItem = (text) => setTextItem(text);

  const onHandlerAddItem = () => {
    // setItemList(currentItems => [...currentItems, {id:Math.random()*100, value: textItem}]);
    setItemList(currentItems => [...currentItems, {id: Date.now(), value: textItem}]);
    // setItemList({...itemList, id:Math.random()*100, value: textItem}); //no funciona esta poronga
    setTextItem('');
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  const deleteThisFunctionAux = id => {
    console.log(id);
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
  // useEffect(()=>{  //se ejecuta siempre, no está bien hacerlo así
  // });
  useEffect(()=>{ // se ejecuta al cargar el componente
    loadDataOnlyOnce(); 
    console.log('se cargó el componente');

  }, []);
  useEffect(()=>{ // se ejecuta cada vez que se cambia alguna de las variables dentro de los corchetes
    console.table('Se cambió el itemList -->' + JSON.stringify(itemList));

  }, [itemList]);

  return (
    // <View style={styles.container}>
    <View style={styles.screen}>
      {/* <Modal
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
          </View> 
        </View> 
      </Modal> */}
      <ModalCustum 
        itemSelected={itemSelected}
        onHandlerDeleteItem={deleteThisFunctionAux}
        modalVisible={modalVisible}
      />
      <View style={styles.inputContainer}>
        {/* <Text>Hola, Coder! by Buxi</Text>
        <StatusBar style="auto" /> */}
        <TextInput 
          placeholder='Ingrese aquí'
          style={styles.textInput}
          value={textItem}
          onChangeText={onHandlerSetTextItem}
        />
        <Button title='Add' onPress={onHandlerAddItem} disabled={textItem.length <1 ? true: false  }/>
      </View> 
      <ItemList 
        // db={products}
        db={itemList}

        onHandlerModal = {console.log}     
      />
      <FlatList
        data={itemList}
        renderItem={data => (
          <TouchableOpacity onPress={ ()=> onHandlerModal(data.item.id)} >
              <Text style={styles.item}>{data.item.value}</Text>        
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
    paddingTop : 80
  },
  inputContainer: {
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
  
});
