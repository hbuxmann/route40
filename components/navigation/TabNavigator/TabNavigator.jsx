import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// import ShopNavigator from "../ShopNavigator/ShopNavigator";
import ShopNavigator from "../ShopNavigator/ShopNavigator";
import CartNavigator from '../CartNavigator/CartNavigator';

const BottomTabs = createBottomTabNavigator();


const TabNavigator = () => (

    <BottomTabs.Navigator 
        screenOptions={{
            headerShown: false,
            // tabBarShowLabel: false, 
            tabBarStyle: styles.tabBar
        }}
    
        initialRouteName="Home"
    >
        <BottomTabs.Screen
            name="Home"
            component={ShopNavigator}
        />
        <BottomTabs.Screen
            name="Cart"
            component={CartNavigator}
        />        
    </BottomTabs.Navigator>
)

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 15,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default TabNavigator;