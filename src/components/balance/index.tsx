import React from 'react';
import { 
    View, 
    StyleSheet,
    Text, 
    } from 'react-native';



export function Balance({saldo, gastos}) {
  return (
    <View style={styles.container}>

        <View style={styles.Item}>

            <Text style={styles.itemTitle}> Saldo</Text>

                <View style={styles.content}>
                    <Text style={styles.currentSymbol}> $ </Text>
                    <Text style={styles.balance}> 
                        {saldo} 
                    </Text>

                </View>


        </View>

        <View style={styles.Item}>

            <Text style={styles.itemTitle}> Gastos </Text>

                <View style={styles.content}>
                    <Text style={styles.currentSymbol}> $ </Text>
                    <Text style={styles.expenses}> 
                        {gastos} 
                    </Text>

                </View>


        </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
    container:{
        //cor de fundo
        backgroundColor:'#FfF',
        //direção dos itens, um ao lado 
        flexDirection:'row',
        // objetos um ao lado do outro
        justifyContent:'space-between',
        //margin do inicio 
        paddingStarting: 18,
        paddingEnd: 18,
        //margin topo
        marginTop: -24,
        // margin da esquerda
        marginStart: 14,
        //margin do final
        marginEnd: 14,
        //bordas arredondadas
        borderRadius:4,
        //espaçamento do topo
        paddingTop: 22,
        //espaçamento inferior do conteudo
        paddingBottom:22,
        //sobre o conteudo
        zIndex: 99,

    },
    Item:{


    },
    itemTitle:{
        //font das letras
        fontSize:20,
        color:"#DADADA",



    },
    currentSymbol:{
        //cor do conteudo
        color:"#DADADA",
        // marigin separando conteudo
        marginRight: 6,
        //



    },
    balance:{
        fontSize:22,
        color:"#2ecc61",


    },
    content:{
        //alinhando conteudo
        flexDirection:"row",
        // alinhando no centro o conteudo
        alignItems:"center",


    },
    expenses:{
        fontSize:22,
        color:"#e74c3c"

    }

})
