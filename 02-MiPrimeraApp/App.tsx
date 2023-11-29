import React from 'react'
import HolaMundoScreens from './src/screens/HolaMundoScreens';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreeen } from './src/screens/DimensionesScreeen';

const App = () => {
  return (
    // SafeAreaView se usa mucho en dispositivos con NOTCHE para que se utilize la parte de la pantalla que se pueda visualizar
    <SafeAreaView style={{flex:1}}>
       {/* <HolaMundoScreens />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreeen/>

    </SafeAreaView>
  )
}

export default App;
