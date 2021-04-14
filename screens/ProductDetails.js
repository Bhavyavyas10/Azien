import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet, Image, ScrollView,TouchableOpacity,FlatList,StatusBar, SafeAreaView,Thumbnail,TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Icon, Left, Body, Right ,Button} from 'native-base';

export default class ProductDetails extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
            productdata:[],
        };
    }

    

    componentDidMount(){
         const {_id} = this.props.route.params;
         console.log("from cdm",_id)
        // this.setState({category:category})
        // console.log("State var",this.state.category)
        fetch('http://azien.herokuapp.com/fetch/product/byid',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                _id:_id
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({productdata:data}))
        .then(()=>console.log('from data',this.state.productdata))
    }

    _renderItem = (item) => {
        return(
            <ScrollView style={{flex:1}} >
                <View style={{marginLeft:15,marginRight:15}}>
                    <Image style={{height:500,width:'100%'}} source={{uri:item.item.productphoto}} />
                </View>
                <Container>
                    <Content>
                        <CardItem>
                            <Left>
                                <Text style={{color:'grey'}}>{item.item.productname}</Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>{item.item.discountedproductprice}</Text>{/* Discounted */}
                            </Left>
                            <Body>
                                <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid'}} >{item.item.originalproductprice}</Text>{/* Original */}
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'bold'}} >Size</Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                            <Text style={{color:'grey'}}>{item.item.productsize}</Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'bold'}} >Product Detail</Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Product Category</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productcategory.categoryname}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Product Brand</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productbrand.brandname}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Product Description</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productdiscription}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Product Colour</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productcolor}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'bold'}}>Product Seller</Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Seller Email</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productseller.email}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Seller pincode</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productseller.pincode}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{fontWeight:'900'}}>Seller city</Text>
                            </Left>
                            <Right>
                                <Text style={{color:'grey'}}>{item.item.productseller.city}</Text>
                            </Right>
                        </CardItem>
                    </Content>
                <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                <TouchableNativeFeedback>
                <View style={{marginTop:20,backgroundColor: 'powderblue',height:100,width:200,justifyContent: 'center',borderRadius:80}} >
                    <Text style={{textAlign:'center',color:'white'}}>ADD TO CART</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                <View style={{marginTop:20,backgroundColor: 'pink',height:100,width:200,justifyContent: 'center',borderRadius:80,}} >
                    <Text style={{textAlign:'center',color:'white'}}>BUY NOW</Text>
                </View>
                </TouchableNativeFeedback>
                </View>
                </Container>
            </ScrollView>
        )
    }

    render(){
        return(
            <SafeAreaView>
                <FlatList
                data={this.state.productdata}
                renderItem={this._renderItem}
                keyExtractor={(items)=>{items._id}}
                />
            </SafeAreaView>
        )
    }

}