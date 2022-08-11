import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../../constants/Colors';
// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import Item from '../Item/Item';
// import Item from './components/Item/Item';
// import {products} from '../../database/products';
import ModalCustom from '../ModalCustom/ModalCustom';
import imageDefault from "../../images/default.jpg";



const ItemList = ({navigation, route}, props) => {

  const dispatch = useDispatch();
  const products2 = useSelector(state => state.products.products);
  // const {nombre} = route.params;
  // const {setNavigateTo, products} = props;
  // console.log('Products 2: '+JSON.stringify(products2))

  // const [textItem, setTextItem] = useState ('');
  // const [itemList, setItemList] = useState ([]);
  // const [itemList, setItemList] = useState (products);
  const [itemList, setItemList] = useState (products2);



  // const loadDataOnlyOnce = () => {
  //   // products.map(obj => setItemList(currentItems => [...currentItems, {id: obj.idProduct, value: obj.alt, image: obj.image}])); 
  //   console.log(itemList);
  // }

  // useEffect(()=>{ // se ejecuta al cargar el componente
  //   loadDataOnlyOnce(); 
  //   // console.log('se cargó el componente');
  // }, []);

  // console.log('ItemList: '+nombre);
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Button 
            // buttonStyle={styles.button}
            color= {Colors.button}
            title='home' 
            // onPress={ ()=> setNavigateTo('Landing')} 
            onPress={ ()=> navigation.navigate('Home')} 
          />
        </View> 
        <FlatList
          data={itemList}
          renderItem={data => (
            <TouchableOpacity onPress={ ()=> {}} >
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

  screen: {
    paddingTop : 20
  },
  inputContainer: {
    // flexDirection:'row', 
    // width: 120,
    justifyContent:'center'
  },
  textInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: '80%'
  },
})
export default ItemList;