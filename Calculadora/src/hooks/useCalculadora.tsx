import { useRef, useState } from "react";

export const useCalculadora = () => {
 
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
  
    enum Operadores{
      sumar,restar,multiplicar,dividir
    };
  
    const ultimaOperacion = useRef<Operadores>()
  
    const limpiar = () =>{
      setNumero('0');
      setNumeroAnterior('0');
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
  
    const cambioNumAnterior = ()=>{
      if(numero.endsWith('.')){
        setNumeroAnterior(numero.slice(0,-1))
      }else{
        setNumeroAnterior(numero)
      }
      setNumero('0')
    }
    
    const btnSumar = () =>{
      cambioNumAnterior();
      ultimaOperacion.current=Operadores.sumar;
    }
    const btnRestar = () =>{
      cambioNumAnterior();
      ultimaOperacion.current=Operadores.restar;
    }
    const btnMultiplicar = () =>{
      cambioNumAnterior();
      ultimaOperacion.current=Operadores.multiplicar;
    }
    const btnDividir = () =>{
      cambioNumAnterior();
      ultimaOperacion.current=Operadores.dividir;
    }
    
    const calcular = ()=>{
      const n1 = Number(numero)
      const n2 = Number(numeroAnterior)
  
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${n1+n2}`)
          break;
        case Operadores.restar:
          setNumero(`${n2-n1}`)
          break;
        case Operadores.multiplicar:
          setNumero(`${n1*n2}`)
          break;
        case Operadores.dividir:
          if(n1!==0){
            setNumero(`${n2/n1}`)
          }
          break;
      }
      setNumeroAnterior('0')
    }    


    return{
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        del,
        positivoNegativo,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        calcular,

    }
}
