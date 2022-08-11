import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNaviigator from './TabNavigator/TabNavigator';

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <TabNaviigator/>
        </NavigationContainer>        
    )

}

export default MainNavigator;