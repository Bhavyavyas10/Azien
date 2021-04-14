import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet, Image, ScrollView,TouchableOpacity,FlatList,StatusBar, SafeAreaView,Thumbnail } from 'react-native';
import { Container, Header, Content, Card, CardItem, Icon, Left, Body, Right ,Button} from 'native-base';


export default class DemoScreen extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
            branddata:[],
        };
    }

    

    componentDidMount(){
        // const {category} = this.props.route.params;
        // console.log("from cdm",category)
        // this.setState({category:category})
        // console.log("State var",this.state.category)
        fetch('http://azien.herokuapp.com/fetch/product/bybrand',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                productbrand:'606584c23cf04a22608dd6f9'
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({branddata:data}))
        //.then(()=>console.log('from data',this.state.branddata))
    }

     _renderItem = (item) => {
        return(
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
            //console.log(item.item.productphoto)
         )
    }

    render(){

        return(
            <SafeAreaView>
                <FlatList 
            data={this.state.branddata}
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