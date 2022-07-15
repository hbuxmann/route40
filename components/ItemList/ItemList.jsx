
import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
// import db from '../../database/products.json';

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

const ItemList = (props) => {
    const {db, onHandlerModal} = props;
    const [itemList, setItemList] = useState ([]);

    const loadDataOnlyOnce = () => {
        db.map(obj => setItemList(currentItems => [...currentItems, {id: obj.idProduct, value: obj}])); 
        console.log(itemList);
    }
    useEffect(()=>{ // se ejecuta al cargar el componente
        console.log('se cargó el componente Lista Item');
        // loadDataOnlyOnce(); 

        setItemList(db);
    }, []);

    return (
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
    );
}

export default ItemList;