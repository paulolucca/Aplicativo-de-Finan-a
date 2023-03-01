
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  FlatList
   } from 'react-native';

import Header from "../../components/Header/index";
import { Balance } from '../../components/balance/index';
import { Moviments } from '../../components/Moviments/index';
import { Actions } from '../../components/Actions/index';

const list =[
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "300,50",
    date:"17/09/2022",
    type: 0 // despesas
  },

  {
    id: 2,
    label: "Pix cliente x",
    value: "2.500,00",
    date:"22/09/2022",
    type: 1 // receita / entrada
  },

  { 
    id: 3,
    label: "Salário",
    value: "7.200,00",
    date:"23/10/2022",
    type: 1 // despesas / entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>

    
      <Header name="Paulo Cesar"/>
      
      <Balance saldo="9.250,00" gastos="-543,00"/>

      <Actions/>

     
      <Text style={styles.title}>Últimas Movimentaçoes</Text>

      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)} 
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item} /> }

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
   
  },
  title:{
    //tamanho da fonte
    fontSize: 18,
    //estilo da fonte
    fontWeight: 'bold',
    //margin inicial
    marginLeft: 14,
    //margin final
    marginRight: 14,
    //margin superior
    marginTop: 14,
    //marign inferios
    marginBottom: 14,
    

  },
  list:{
    //inicio de margen
    marginStart: 14,
    //Fim de margen
    marginEnd: 14,

  }
});