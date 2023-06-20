import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import Axios from "axios";
import Routes from "./src/routes";


export default function App() {
  
  return (
   <NavigationContainer>
    <Routes/>
   </NavigationContainer>
  );
}
