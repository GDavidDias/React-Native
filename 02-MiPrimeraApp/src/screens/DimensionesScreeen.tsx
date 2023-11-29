import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DimensionesScreeen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>

        <View style={styles.cajaNaranja}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:600,
        backgroundColor:'red'
    },
    // El % es relativo al contenedor padre
    cajaMorada:{
        backgroundColor:'#5856D6',
        width:'50%',
        height:'50%',
    },
    cajaNaranja:{
        backgroundColor:'#F0A23B'
    }
});
