import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function Inicio(){
    return(
<View style={styles.container}>
        <Text styles={styles.Text}> sejam bem-vindo e faça sua lista pra fazer sua feira. </Text>
        <Text style={styles.visu}> Não esqueça de nada antes de sair de casa em </Text>
     
</View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Text:{
        fontSize: 25,
        fontWeight: "bold",
    },
    visu:{
        
    }
})