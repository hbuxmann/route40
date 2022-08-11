import React from'react';
import{Platform}from'react-native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../../screens/CartScreen/CartScreen';



const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    console.log('Cart Navigator');
    return (
        <Stack.Navigator
            initialRouteName="Cart tito"        
        >
            <Stack.Screen 
                name="Cart"
                component={CartScreen}
                options={{ title: 'Carritoso' }}
            />

        </Stack.Navigator>


    )   
}

export default CartNavigator;