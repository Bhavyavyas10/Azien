import React from 'react'
import { View,Text,Button,StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

export default function Special() {
    return(

    <ScrollView style={{flex:1}} >
       { /*first Swiper */ }
        <View>
        <Swiper height={200} autoplay={true} style={{marginTop:30}} >          
        <Image source={require('../assest/sale2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/sale3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/sale6.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

    </ScrollView>
    )
}