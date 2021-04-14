import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Homepage from '../screens/homepage'
import Swipe from '../screens/swipe'
import Special from '../screens/special';
import Women from '../screens/women';
import Home from './home';
import Men from '../screens/men';
import ProductList from '../screens/ProductList'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerRoute1 from '../screens/DrawerRoute1';
import DrawerRoute2 from '../screens/DrawerRoute2';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ProductDetails from '../screens/ProductDetails'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator(); 

function drawer(){
    return(
        <Drawer.Navigator screenOptions={{headerTitle: () => <Header/>}} >
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="First" component={DrawerRoute1} />
        <Drawer.Screen name="Second" component={DrawerRoute2} /> 
    </Drawer.Navigator>
    )
}

 export default function Homestack() {
     return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="first" component={Swipe}  />
                  <Stack.Screen name="second" component={Signup} />
                  <Stack.Screen name="third" component={drawer} />
                  <Stack.Screen name="forth" component={Special} />
                  <Stack.Screen name="fifth" component={Women} />  
                  <Stack.Screen name="sixth" component={Men} />
                  <Stack.Screen name="seventh" component={ProductList} />
                  <Stack.Screen name="eight" component={ProductDetails} />
              </Stack.Navigator>
          </NavigationContainer>
     )
 }
