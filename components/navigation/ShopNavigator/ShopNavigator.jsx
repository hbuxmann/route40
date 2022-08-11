import React from'react';

import{ NavigationContainer } from "@react-navigation/native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

// import CategoriesScreen from '../../screens/CategoriesScreen/CategoriesScreen';

// import CategoryBreadScreen from '../../screens/CategoryBreadScreen/CategoryBreadScreen';

// import BreadDetailScreen from'../../screens/BreadDetailScreen/BreadDetailScreen';
import Landing from '../../Landing/Landing';
import ItemListAdmin from '../../ItemListAdmin/ItemListAdmin';
import ItemList from '../../ItemList/ItemList';

const Stack = createNativeStackNavigator();


const ShopNavigator=(props)=>{
  

const {itemList, setItemList}= props;
console.log('Main Shop Navigator');
return (
  // const {itemList, setItemList}= props;
//  <NavigationContainer>
   <Stack.Navigator initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }

        }}
        options = {{name : 'holamundo'} } 
   >
    {/* <Stack.Navigator initialRouteName="Home"> */}
      <Stack.Screen name="Home" component={Landing} itemList={itemList} setItemList={setItemList}/>
      <Stack.Screen name="Admin" component={ItemListAdmin} itemList={itemList} setItemList={setItemList} />
      <Stack.Screen name="List" component  ={ItemList}/>
   </Stack.Navigator>
// </NavigationContainer>
) };


export default ShopNavigator;