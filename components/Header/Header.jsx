import React from "react";
import {View, Text, StyleSheet} from 'react-native';
// import Colors from "../../constants/Colors";



const Header = props => {

    const {title} = props;
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {title}</Text>
        </View>
    )
}


const styles = StyleSheet.create( {

    header :{
        width: "100%",
        heigth: 90,
        paddingTop: 36,
        // backgroundColor: '#f7287b',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 22
    }


})

export default Header;