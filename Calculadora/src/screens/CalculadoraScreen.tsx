import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalculadora } from '../components/BotonCalculadora'

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0')

  const limpiar = () =>{
    setNumero('0');
  };

  const armarNumero = (numeroTexto:string) =>{
    //No aceptar doble punto
    if(numero.includes('.') && numeroTexto === '.') return;
    
    if(numero.startsWith('0') || numero.startsWith('-0')){
      //Punto decimal
      if(numeroTexto === '.'){
        setNumero(numero + numeroTexto)
        
        //Evaluar si es otro cero, y hay un punto
      }else if(numeroTexto==='0' && numero.includes('.')){
        setNumero(numero + numeroTexto)

        //Evaluar si es diferente de cero y no tiene un punto
      }else if(numeroTexto!=='0' && !numero.includes('.')){
        setNumero(numeroTexto)

      }else if(numeroTexto==='0' && !numero.includes('.')){
        setNumero(numero);
      }else{
        setNumero(numero + numeroTexto)
      }

    }else{
      setNumero(numero+numeroTexto)
    }
  };

  const del=()=>{
    console.log(numero.length)
    if(numero.length>=1){
      if(numero.length===1 && numero ==='0') return;
      if(numero.length===2 && numero.includes('-')){
        setNumero('0')
        return
      }
      const newNumero = numero.slice(0,-1)
      setNumero(newNumero)
    }else{
      setNumero('0')
    }
  }

  const positivoNegativo = () =>{
    if(numero.includes('-')){
      setNumero(numero.replace('-', ''))
    }else{
      setNumero('-' + numero)
    }
  }

  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
        <Text 
          style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{numero}</Text>

        {/* Fila de botones */}
        <View style={styles.fila}>
          <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar}/>
          <BotonCalculadora texto="+/-" color="#9B9B9B" accion={positivoNegativo}/>
          <BotonCalculadora texto="del" color="#9B9B9B" accion={del}/>
          <BotonCalculadora texto="/" color="#FF9427" accion={limpiar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
          <BotonCalculadora texto="7" accion={armarNumero}/>
          <BotonCalculadora texto="8" accion={armarNumero}/>
          <BotonCalculadora texto="9" accion={armarNumero}/>
          <BotonCalculadora texto="X" color="#FF9427" accion={limpiar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
          <BotonCalculadora texto="4" accion={armarNumero}/>
          <BotonCalculadora texto="5" accion={armarNumero}/>
          <BotonCalculadora texto="6" accion={armarNumero}/>
          <BotonCalculadora texto="-" color="#FF9427" accion={limpiar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
          <BotonCalculadora texto="1" accion={armarNumero}/>
          <BotonCalculadora texto="2" accion={armarNumero}/>
          <BotonCalculadora texto="3" accion={armarNumero}/>
          <BotonCalculadora texto="+" color="#FF9427" accion={limpiar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
          <BotonCalculadora texto="0" ancho accion={armarNumero}/>
          <BotonCalculadora texto="." accion={armarNumero}/>
          <BotonCalculadora texto="=" color="#FF9427" accion={limpiar}/>
        </View>

    </View>
  )
}
