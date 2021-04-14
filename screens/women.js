import { Header } from 'native-base';
import React from 'react'
import { View,Text,Button,StyleSheet, Image, ScrollView ,FlatList,TouchableNativeFeedback} from 'react-native';
import Swiper from 'react-native-swiper'

export default class Women extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
            branddata:[],
        };
    }

    componentDidMount(){
        const {category} = this.props.route.params;
        console.log("from cdm",category)
        // this.setState({category:category})
        // console.log("State var",this.state.category)
        fetch('http://azien.herokuapp.com/fetch/brand/bycategories',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                category:category
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({branddata:data}))
        .then(()=>console.log('from data',this.state.branddata))
    }

    _renderItem = (item) => {
        return(
            <TouchableNativeFeedback onPress={()=>{console.log(item.item._id,this.props.navigation.navigate('seventh',{productbrand:item.item._id}))}} >
                <View style={{backgroundColor:'white',height:120,width:120,}}>
                 <Image source={{uri:item.item.logo}} style={{height:'100%',width:'100%',borderRadius:55}} />
            </View>
            </TouchableNativeFeedback>
        )
    }

    render(){
        return(
            <ScrollView style={{flex:1}} >

         {/*header style */}
<View  >
            <Header></Header>
      </View>

       { /*first Swiper */ }
        <View>
        <Swiper height={170} autoplay={true} style={{marginTop:20}} >          
        <Image source={require('../assest/womenC4.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

       <View>
           <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'grey',marginBottom:10}}>Women Collection</Text>
       </View>
       <View>
       <View style={{backgroundColor:'white',marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
      <View>
          <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'normal',color:'black'}}> Biggest deals on Top Brands</Text>
      </View>
       <View>
       <FlatList
        data={this.state.branddata}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
       </View>
    
       </View>
       </View>

       <View>
        <Swiper height={650} autoplay={true} style={{marginTop:10}} >          
        <Image source={require('../assest/womenCC2.jpg')} style={{flex:1,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenCC3.jpg')} style={{flex:1,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenCC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

        <View style={{backgroundColor:'pink', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
        <Image source={require('../assest/womenmask.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
            </View>

         <View>
             <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'black'}}>Shop By Category</Text>
         </View>

         <View style={{backgroundColor:'skyblue', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category1.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'pink', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category2.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'green', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category3.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'green', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category4.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>


         <View  style={{backgroundColor:'white', height:300,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
         <View>
             <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Winter Trends</Text>
         </View>
         <View style={styles.distance}>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter1.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter2.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>

         </View>
         </View>

         <View>
        <View style={{backgroundColor:'grey',height:130,width:'100%',marginTop:20}}>
        <Image source={require('../assest/min.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
        </View>
      </View>


         <View>
          <Text style={{textAlign:'left',fontSize:20,color:'black',marginTop:10}}>More about shopping at Azien</Text>
          <Text style={{textAlign:'left',fontSize:10,color:'black',marginTop:5,paddingLeft:5}}>See More</Text>
      </View>

      
    </ScrollView>
        )
    }
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
});