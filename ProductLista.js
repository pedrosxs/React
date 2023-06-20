import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ProductItem from './ProductItem';



 
const ProductList = () => {
  const [products, setProducts] = useState([
    
  ]);

  const submeterInformacao = (texto) =>{
    Axios.post ("http://192.168.0.122:3001/item", {item: texto} )
    
  }
  
  
  

  

  const [totalPrice, setTotalPrice] = useState(0);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, ] = useState('');

  const handleProductPress = (product) => {
    setTotalPrice(totalPrice + product.price);
  };

  const handleProductRemove = (index) => {
    const NovaLista = [...products];
    NovaLista.splice(index, 1)
    setProducts(NovaLista);
    };
  

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProductName(product.name);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === editingProductId) {
        return {
          ...product,
          name: newProductName,
          price: parseFloat(newProductPrice)
        };
      }
      return product;
    });
    setProducts(updatedProducts);
    setEditingProductId(null);
    setNewProductName('');
   
  };

  const handleAddProduct = () => {
    
    const existingProduct = products.find((product) => product.name.toLowerCase() === newProductName.toLowerCase());
  
    if (existingProduct) {
      alert('Um produto com o mesmo nome já existe!');
      return;
    }
  
    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: parseFloat(newProductPrice)
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
   
  };
  

 
  


  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            onPress={() => handleProductPress(item)}
            onRemove={() => handleProductRemove(item)}
            onEdit={() => handleEditProduct(item)}
          />
        ))}
      </ScrollView>
      
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Nome:</Text>
        <TextInput
          style={styles.formInput}
          value={newProductName}
          onChangeText={(text) => setNewProductName(text)}
        />
        
        {editingProductId ? (
          <TouchableOpacity style={styles.formButton} onPress={handleUpdateProduct}>
            <Text style={styles.formButtonLabel}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.formButton} onPress={handleAddProduct}>
          <Entypo style = {styles.icon} name="plus" size={24} color="black" />
          </TouchableOpacity>
        )}

        
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: -5,
    backgroundColor: '#fff'
  },
  
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16
  },
  totalPrice: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  formContainer: {
    marginTop: 4
  },
  formLabel: {
    fontSize: 17,
    marginBottom: 10
  },
  formInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 40,
    marginBottom: 10,
    paddingHorizontal: 8
  },
  formButton: {
    backgroundColor: 'gray',
    padding: 13,
    borderRadius: 40,
    marginTop: 2,
  },
  formButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  icon: {
  
    textAlign: 'center'
  }
});

export default ProductList;
