
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View
   } from 'react-native';

import Header from "../../components/Header/index";
import { Balance } from '../../components/balance/index';
export default function Home() {
  return (
    <View style={styles.container}>

    
      <Header name="Paulo Cesar"/>
      
      <Balance saldo="9.250,00" gastos="543,00"/>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
   
  }
});