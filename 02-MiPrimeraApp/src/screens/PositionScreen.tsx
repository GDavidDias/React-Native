import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde}/>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9'
    },
    cajaMorada:{
      width:100,
      height:100,
      backgroundColor:'#5856D6',
      borderWidth:2,
      borderColor:'red',
      position:'absolute',
      bottom:0
    },
    cajaNaranja:{
      width:100,
      height:100,
      backgroundColor:'#F0A23B',
      borderWidth:2,
      borderColor:'red',
      position:'absolute',
      bottom:0,
      right:0,
    },
    cajaVerde:{
      backgroundColor:'green',
      borderWidth:10,
      borderColor:'white',
      ...StyleSheet.absoluteFillObject
    }
});