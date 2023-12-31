import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'green'
    },
    title:{
      paddingHorizontal:100,
      paddingVertical:20,
      marginHorizontal:10,
      marginVertical:50,
      fontSize:20,
      borderWidth:5
    }
});
