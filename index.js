//Importanto componentes
import React, { Component } from 'react';
import {ReactNative,
       Text,
       Button,
       View,
       AppRegistry,
       StyleSheet} from 'react-native';
       import ListaItens from './src/components/ListaItens';


//Corpo do App
 
export default class app4 extends Component{
    render(){
           return (
            <ListaItens/>
         );
      
     
    }
 
 }
 
//--------------------------//

//Compacta e exibe na tela
AppRegistry.registerComponent('app4',()=>app4);