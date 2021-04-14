import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



export default function Header (){
    const navigation = useNavigation(); 
    return(
    <View style={styles.header}>
    <View style={{flexDirection:'row'}} >
    <Icon name="menu" size={20} style={{color:'white',paddingTop:15,paddingLeft:15}} onPress={() => navigation.openDrawer()} />
    <Text style={styles.headerfont} >Azien</Text>
    </View>
    <View style={{marginRight:20,flexDirection:'row'}} >
    <Icon name="search" size={25} style={{color:'white',paddingTop:15,paddingLeft:15}} onPress={() => {}} />
    <Icon name="favorite-outline" size={25} style={{color:'white',paddingTop:15,paddingLeft:15}} onPress={() => {}} />
    <Icon name="shopping-cart" size={25} style={{color:'white',paddingTop:15,paddingLeft:15}} onPress={() => {}} />
    </View>
    </View>
    )
    }


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor:'#0099CC',
        flexDirection:'row',
        justifyContent:'space-between'
    },
 
    headerfont: {
        fontSize:20,
        fontWeight: 'bold',
        paddingTop:10,
        shadowColor:'white',
        letterSpacing: 1,
        paddingLeft:45,
        color:'white',
    },
})