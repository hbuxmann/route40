
import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ModalCustom from '../ModalCustom/ModalCustom';
// import db from '../../database/products.json';



const ItemList = (props) => {
    const {db, onHandlerDeleteItem} = props;
    const [itemList, setItemList] = useState ();
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});

    const onHandlerModal = id => {
      setItemSelected(itemList.find(item => item.id === id));
      console.log('Item ID-->'+id);
      console.log('Item Selected: '+JSON.stringify(itemSelected));
      setModalVisible(!modalVisible);
    }
    useEffect(()=>{ // se ejecuta al cargar el componente
        console.log('se cargó el componente Lista Item');
        console.log('stringify 1: '+db);
        setItemList(db);
        console.log('stringify 2: '+JSON.stringify(ItemList));
    }, []);

    return (
      <View>
        {/* <ModalCustom 
          itemSelected={itemSelected}
          // onHandlerDeleteItem={deleteThisFunctionAux}
          onHandlerDeleteItem={onHandlerDeleteItem}
          modalVisible={modalVisible}
        /> */}

        <FlatList
          data={db}
          renderItem={data => (
          <TouchableOpacity onPress={ ()=> onHandlerModal(data.item.id)} >
              {/* <Text >{data.item.value.alt}</Text>         */}
              <Item 
                  // desc={data.item.value.alt}
                  // image={data.item.value.image}
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
});

export default ItemList;