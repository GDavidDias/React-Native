import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

//const {width, height} = Dimensions.get('window');

export const DimensionesScreeen = () => {
    
    //Permite mostrar el ancho y alto correcto y cambia si movemos en vertical la pantalla
    const {width,height} = useWindowDimensions();

  return (
    <View>
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width: width*0.20 //20% del ancho de la pantalla real
                }}/>

            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title} >W: {width}, H: {height}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
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
    },
    title:{
        fontSize:25,
        textAlign:'center'
    }
});
