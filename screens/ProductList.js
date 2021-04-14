import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet, Image, ScrollView,TouchableOpacity,FlatList,StatusBar, SafeAreaView,Thumbnail,TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Icon, Left, Body, Right ,Button} from 'native-base';


export default class ProductList extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
            productdata:[],
        };
    }

    

    componentDidMount(){
         const {productbrand} = this.props.route.params;
         console.log("from cdm",productbrand)
        // this.setState({category:category})
        // console.log("State var",this.state.category)
        fetch('http://azien.herokuapp.com/fetch/product/bybrand',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                productbrand:productbrand
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({productdata:data}))
        .then(()=>console.log('from data',this.state.productdata))
    }

     _renderItem = (item) => {
        return(
            <TouchableNativeFeedback onPress={()=>{console.log(item.item._id),this.props.navigation.navigate('eight',{_id:item.item._id})}} >
                <Container style={{height:350}} >
                <Content>
                    <CardItem cardBody>
                        <Image source={{uri: item.item.productphoto}} style={{height: 230, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>{item.item.productname}</Text>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>{item.item.discountedproductprice}</Text>
                        </Left>
                        <Body>
                            <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid'}} >{item.item.originalproductprice}</Text>
                        </Body>
                    </CardItem>
                </Content>
            </Container>
            </TouchableNativeFeedback>
            //console.log(item.item.productphoto)
         )
    }

    render(){

        return(
            <SafeAreaView>
                <FlatList 
            data={this.state.productdata}
            renderItem={this._renderItem}
            numColumns={2}
            keyExtractor={item=>item.id}
            />
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    x:{
        backgroundColor:'white',
        height:120,
        width:110,
        marginLeft:5,
        marginRight:5
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:15,
        resizeMode:'center'
    }
  });