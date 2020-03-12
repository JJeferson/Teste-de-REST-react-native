
//Importanto componentes
import React, { Component } from 'react';
import {Text,AppRegistry,ScrollView,View,StyleSheet} from 'react-native';

import axios from 'axios';
import Itens from './Itens';
 
//Corpo do App
/*
 <View style={styles.container}>
*/

export default class ListaItens extends Component{
   
  constructor(props){
   super(props);
   this.state = {listaItens:[]}
   
  }  


   //-----------------------------------

   UNSAFE_componentWillMount(){
     //Requisição Http ocorre aqui
     axios.get('https://api.spacexdata.com/v3/missions')
     .then(response => {this.setState({listaItens: response.data})})
     .catch(() => {console.log('Erro ao conectar com REST API')});
    }




   //-----------------------------------
   // o item dentro do function é só um nome para poder chamar as chaves do json
   render(){ 

          return (
          <ScrollView>
             {this.state.listaItens.map( function(item){ 
             return (
              <ScrollView>  
             <Text></Text>
             <Itens Key={item.manufacturers} 
                   item={item}>
             </Itens>
             
             
             </ScrollView>
             )})}
          </ScrollView>
        );
     
    
   }

}
