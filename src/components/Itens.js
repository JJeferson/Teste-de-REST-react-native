
//Importanto componentes
import React, { Component } from 'react';
import {Text,Image,AppRegistry,View,StyleSheet} from 'react-native';

 


export default class Itens extends Component{
 
   //-----------------------------------
   render(){

          return (
          <View style = {styles.item}>         
          
          <View style={{ width:200}}  >
          <Text>Empresa :{this.props.item.manufacturers}</Text>
          <Text>Descrição: {this.props.item.description}</Text>
          </View>

          <View style = {styles.foto} > 
          <Image style={{height: 100, width:100}} 
          source ={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/250px-Logo_TV_2015.png' }} />
          </View>

          </View> 
          );
     }

}

const styles = StyleSheet.create({
    item:{
     borderWidth:0.5,
     borderColor:'#999',
     margin: 10,
     padding: 10,
     flexDirection:'row'

    },
    foto:{
     width:102,
     height:102    
    }

})