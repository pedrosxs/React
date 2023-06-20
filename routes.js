import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import search from './seacrh';

import {Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: '#121212',
                
            },
            activeTintColor: '#000000',
            tabBarStyles:{
                paddingBottom:5,
                paddingtop:5,
            }
        }}
        >
            <Tab.Screen 
            name="Inicio" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name='home' size={size} color={color}/>
      )  }}
            
            />

            <Tab.Screen 
            name="Faça sua lista da feira aqui!" 
            component={search}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name='clipboard' size={size} color={color}/>
      )  }}
            />

      

         

        </Tab.Navigator>
    )
}
