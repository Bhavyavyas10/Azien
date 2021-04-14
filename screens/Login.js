import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {
//   FilledTextField,
// } from 'react-native-material-textfield';
export default class Login extends React.Component { 

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
    return (
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
           <Text style={{textAlign:'center', color: 'white'}}>Login</Text>
           </TouchableOpacity>
         </View>
         <View>
           <Text style={{padding: 10, textAlign: 'center',fontWeight:'bold'}}>Don't have a login?<Text style={{color: 'darkgreen'}}  onPress={()=>{this.props.navigation.navigate('second')}}>SignUp</Text> </Text>
         </View>
     </ View>
      
    );
  }
}

const styles = StyleSheet.create({
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
    paddingLeft:5,
    textAlign: 'left',
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


});
