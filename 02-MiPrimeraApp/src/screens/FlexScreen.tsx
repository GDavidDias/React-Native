import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        flexDirection:'row',
        flexWrap:'wrap',
        
        //justifyContent:'center'
        //justifyContent:'space-around', //distribuye el mismo margen de espacio entre sus hijos
        //justifyContent:'space-between' //distribuye entre los elementos inicio y final el mismo espacio
        //justifyContent:'space-evenly'//distribuye a los hijos para que esten separados uniformemente
        alignItems:'flex-start',
        //justifyContent:'flex-end'

    },
    caja1:{
        //flex:1,
        borderWidth:2,
        borderColor:'red',
        fontSize:20,
        //alignSelf:'center'
    },
    caja2:{
        //flex:3,
        borderWidth:2,
        borderColor:'green',
        fontSize:20,
        //alignSelf:'flex-end'
    },
    caja3:{
        //flex:2,
        borderWidth:2,
        borderColor:'blue',
        fontSize:20,
        //alignSelf:'flex-start'

    }
});