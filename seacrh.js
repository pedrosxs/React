import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from "../produtos/ProductLista";

export default function Procurar(){
    return(
<View style={{ flex: 1 }}>
      <ProductList />
  
    </View>
    );
}
