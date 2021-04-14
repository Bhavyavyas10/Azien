import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React ,{useState,useEffect}from 'react'
import { View,
    Text,
    Button,
    StyleSheet, 
    Image, 
    ScrollView ,
    TouchableOpacity,

} from 'react-native';
import Swiper from 'react-native-swiper'
import Header from '../shared/header'

//const Stack = createStackNavigator();

export default function Homepage({navigation}) {

    

    return(
        <ScrollView style={{flex:1}} >
            <View>
        
              {/* Header view */}
      {/* <View style={styles.header} >
          <Text style={styles.headerfont} >Azien</Text>
      </View> */}
      <Header />

            {/* Category box view */}
      <View style={styles.distance}>
      <TouchableOpacity  onPress={()=>{navigation.navigate('sixth',{category:'605d991f803bc63e98376e1e'})}}>
          <View style={{ height:100,width:100 }}>
          <Image source={require('../assest/men.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}}/>
            
          </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{navigation.navigate('fifth',{category:'605d994d803bc63e98376e1f'})}}>
          <View style={{ height:100,width:100}} >
          <Image source={require('../assest/women.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}}/>
          </View>
          </TouchableOpacity>
          <View style={{ height:100,width:100 }} >
          <Image source={require('../assest/kids.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}}></Image>
          </View>
      </View>
        
       
            {/* Swiper view */}
        
        <Swiper height={220} autoplay={true} style={{marginTop:30}} >          
        <Image source={require('../assest/sale2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/sale3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/sale6.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
          
        </View>
      <View>
         <Text style={{marginTop:10,fontSize:20,paddingLeft:5,fontWeight:'bold'}}>Special For You</Text>   
      </View>

      <View style={styles.box}>
        <ScrollView horizontal={true}>
        <View style={{backgroundColor:'powderblue', height:150,width:250,paddingRight:5,borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}} />
        <View style={{backgroundColor:'skyblue', height:150,width:250,marginLeft:20, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}} />
        <View style={{backgroundColor:'pink', height:150,width:250,marginLeft:20, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} />
        <View style={{backgroundColor:'powderblue', height:150,width:250,marginLeft:20,paddingRight:5,borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}} />
        <View style={{backgroundColor:'skyblue', height:150,width:250,marginLeft:20,paddingRight:5,borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}} />
        <View style={{backgroundColor:'pink', height:150,width:250,marginLeft:20,paddingRight:5,borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}} />
        <View style={{justifyContent:'center',paddingLeft:30}}>
            <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'grey'}} onPress={()=>{navigation.navigate('forth')}}>See More</Text>
        </View>
        </ScrollView>
      </View>
      <View>
        <View style={{backgroundColor:'grey',height:130,width:'100%'}}>
        <Image source={require('../assest/min.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
        </View>
      </View>
      <View style={{backgroundColor:'white', height:500,width:'100%',paddingRight:5,marginTop:10,borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}>
      <View>
          <Text style={{marginTop:10,fontWeight:'bold',fontSize:20,paddingLeft:5}}>Deals of the Day</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:5}}>
      <View style={{backgroundColor:'powderblue', height:200,width:150 }} />
      <View style={{backgroundColor:'powderblue', height:200,width:150 }} />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:5}}>
      <View style={{backgroundColor:'powderblue', height:200,width:150 }} />
      <View style={{backgroundColor:'powderblue', height:200,width:150 }} />
      </View>
      <View>
          <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'grey',marginTop:7}}>see more</Text>
      </View>
      </View>
      <View>
      <Swiper height={550}  autoplay={true} style={{marginTop:30}} >          
        <Image source={require('../assest/homeC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/homeC2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/homeC3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
      </View>
      <View>
          <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'grey',marginTop:10}}>Trending now</Text>
          <View style={styles.box}>
        <ScrollView horizontal={true}>
       <View style={{backgroundColor: 'pink',height:190,width:150}} >
       <Image source={require('../assest/T1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
         </View>
       <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>
           <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>
           <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>
           <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>
           <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>
           <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} >
       <Image source={require('../assest/T1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
           </View>

        </ScrollView>
      </View>
      </View>
      <View>
          <Text style={{textAlign:'left',fontSize:20,color:'black',marginTop:10}}>More about shopping at Azien</Text>
          <Text style={{textAlign:'left',fontSize:10,color:'black',marginTop:5,paddingLeft:5}}>See More</Text>
      </View>
      </ScrollView>
        
      )
}


const styles = StyleSheet.create({


    header: {
        width: '100%',
        height: 50,
        backgroundColor:'#0099CC',
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
 
    distance: {
     flexDirection: 'row',
     justifyContent:'space-evenly',
     marginTop:10,
    },
 
    box: {
     margin:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:15,
     borderBottomLeftRadius:15,
     borderBottomRightRadius:10,
 
    }
 
 });
 
 