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
import Men from '../screens/men';

const Stack = createStackNavigator();

 export default function Home() {
     return (
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="woman" component={Women} />
                  <Stack.Screen name="man" component={Men} />
                  </Stack.Navigator>
     )
 }
