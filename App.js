// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { useFonts } from 'expo-font';

// import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
import ItemListAdmin from './components/ItemListAdmin/ItemListAdmin';
import MainNavigator from './components/navigation/MainNavigator/MainNavigator'

// import db from './database/products.json';
import {products} from './database/products';
import Landing from './components/Landing/Landing';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require ('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),

  });

  const [navigateTo, setNavigateTo] = useState('');
  const [productList, setProductList] = useState(products);
  
  // const [textItem, setTextItem] = useState ('');
  const [itemList, setItemList] = useState ([]);


  const loadDataOnlyOnce = () => {
    products.map(obj => setItemList(currentItems => [...currentItems, {id: obj.idProduct, value: obj.alt, image: obj.image}])); 
    console.log(itemList);
  }
  // // useEffect(()=>{  //se ejecuta siempre, no está bien hacerlo así
  // // });
  useEffect(()=>{ // se ejecuta al cargar el componente
    loadDataOnlyOnce(); 
    console.log('se cargó el componente');

  }, []);
  // useEffect(()=>{ // se ejecuta cada vez que se cambia alguna de las variables dentro de los corchetes
  //   console.table('Se cambió el itemList -->' + JSON.stringify(itemList));

  // }, [itemList]);
  let content = <Text/>;

  switch(navigateTo) {
    case  'Landing':
      content = <Landing setNavigateTo={setNavigateTo} />
      break;
    case 'ItemListAdmin':
      content = <ItemListAdmin setNavigateTo={setNavigateTo} itemList={itemList} setItemList={setItemList} />;
      break;
    case 'ItemList':
      // content = <ItemList setNavigateTo={setNavigateTo} products={productList}/>;
      content = <ItemList setNavigateTo={setNavigateTo} products={itemList}/>;

      break;
  }

  return (
    // <View style={styles.container}>
    <Provider store={store}>
    <View>
      <Header title={'ROUTE 40'}/>
      <MainNavigator itemList={itemList} setItemList={setItemList}/>
      {/* {content} */}
      {/* <Landing /> */}
      {/* <View style={styles.screen}>
        <View style={styles.modalButtonFrame}>
          <View style={styles.modalButton}>
            <Button title='Listar'/>
          </View>
          <View style={styles.modalButton}>
            <Button title='Administrar'/>
          </View>
        </View>
      </View> */}

      
      {/* <ItemList /> */}
      {/* <ModalCustom 
        itemSelected={itemSelected}
        onHandlerDeleteItem={onHandlerDeleteItem}
        onHandlerCancel={onHandlerCancel}

        modalVisible={modalVisible}
      />
      
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
      /> */}
    </View>
    </Provider>
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
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
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
