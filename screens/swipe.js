import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,

} from 'react-native';
import Login from './Login';
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class Swipe extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
        userdata:[]
    };
  }

  sendData = () => {
    fetch('',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
      })
    })
  }

    render(){
      return(
        <View style={{flex:1}} >
          <Swiper style={styles.wrapper} autoplay={true} showsPagination={false} >
        <View style={styles.slide1}>
          {/* <Text style={styles.text}>Hello Swiper</Text> */}
            <Image source={require('../assest/fashion1.jpg')} style={{height:'100%',width:'100%'}} />
        </View>
        <View style={styles.slide2}>
           <Image source={require('../assest/fashion3.jpg')} style={{height:'100%',width:'100%'}}/>
        </View>
        <View style={styles.slide3}>
          <Image  source={require('../assest/ff2.jpg')} style={{height:'100%',width:'100%'}} />
        </View>
      </Swiper>
      <View style={{position:"absolute",flex:1,justifyContent: 'center',alignItems: 'center'}} >
      < View style={styles.container}>
      <View>
       <Text style={styles.highlight}>Login</Text>
      </View>
      <View>
       <Text style={styles.uspa}>Username:</Text>
       <TextInput style={styles.box} placeholder='e.g abc@gmail.com' />

       <Text style={styles.uspa}>Password:</Text>
       <TextInput 
       secureTextEntry={true}
       style={styles.box} placeholder='' />
     </View>  
     <View>
       <Text style={styles.fp}>ForgetPassword?</Text>
     </View>
       <View style={styles.but}> 
       <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('third')}}>
         <Text style={{textAlign:'center', color: 'white'}}>SignUp</Text>
         </TouchableOpacity>
       </View>
       <View>
         <Text style={{padding: 10, textAlign: 'center',fontWeight:'bold'}}>Don't have a login?<Text style={{color: 'darkgreen'}}  onPress={()=>{this.props.navigation.navigate('second')}}>SignUp</Text> </Text>
       </View>
   </ View>
      </View>
      </View>
    );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#92BBD9'
    },
    container: {
      textAlign:'left',
      paddingTop: 30,
      margin: 60,
      flex:1,
    },
    box: {
      borderBottomWidth: 2,
      borderBottomColor: '#A9A9A9',
      paddingTop:1,
      paddingBottom:1,
      margin:10,
    },
    highlight: {
      paddingTop:50,
      paddingBottom:20,
      fontSize:35,
      textAlign: 'left',
      color: 'darkblue',
      fontWeight: 'bold',
    },
    fp: {
      color: 'darkgreen',
      textAlign: 'right',
      fontWeight: 'bold',
      paddingBottom:10,
    },
    uspa: {
      paddingLeft:5,
      paddingTop:10,
      color:'black',
      fontSize:20,  
      fontWeight:'bold',
    },
    but: {
      marginTop:20,
      backgroundColor: 'blue',
      height:30,
      justifyContent: 'center',
      borderRadius:40,
    },
  
    // text: {
    //   color: '#fff',
    //   fontSize: 30,
    //   fontWeight: 'bold'
    // }
  })