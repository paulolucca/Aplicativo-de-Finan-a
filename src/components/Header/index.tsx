import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
    } from 'react-native';

import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 ;

export default function Header({name}) {
  return (

    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.userName}>{name}</Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>

          <Feather name='user' size={27} color='#fff'/>
          
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

container:{
  // cor de fundo do statusbar
  backgroundColor: '#8000ff',
  //espaçamento para android e ios
  paddingTop: statusBarHeight,
  // direção dos objetos
  flexDirection: 'row',
  // espaçamento inicial lado esquerdo
  paddingStart: 16,
  // espaçamento final lado direito
  paddingEnd: 16,
  //espaçamento do menu para o menu
  paddingBottom: 44,



},
content:{
    flex: 1,
    //alinhando obrjetos 
    alignItems: 'center',
    // alinhando objetos uma ao lado do outro
    flexDirection:'row',
    // separando objetos um em cada lado
    justifyContent: 'space-between',



},
userName: {
    //tamanho da fonte 
    fontSize:25,
    //cor das letras 
    color: '#fff',
    // estilos da letras
    fontWeight: 'bold',



    



},
buttonUser:{
    //Largura
    width:44,
    //Altura 
    height:44,
    //Fundo 
    backgroundColor:'rgba(255,255,255, 0.5)',
    //Alinhando no centro cima pra baixo
    justifyContent:'center',
    //Alinhando no centro lado a lado
    alignItems: 'center',
    //aredondamento de bordas
    borderRadius:44/2,

}



})