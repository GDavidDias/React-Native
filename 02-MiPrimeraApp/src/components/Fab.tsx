import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform} from 'react-native'

interface Props{
    title:string;
    position: 'br'|'bl';
    onPress: ()=>void;
}

export const Fab = ({title,onPress, position='br'}:Props) => {

    const ios = () =>{
        return(
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={[
                    styles.fabLocation,
                    (position==='br' ?styles.right :styles.left)
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    const android = ()=>{
        return(
            <View
                style={[
                    styles.fabLocation,
                    (position==='br' ?styles.right :styles.left)
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B',false,30)}
                >
                        <View style={styles.fab}>
                            <Text style={styles.fabText}>{title}</Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

  return (Platform.OS === 'android') ?android() :ios()
}


const styles=StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25,
    },
    right:{
        right:25
    },
    left:{
        left:25
    },
    fab:{
        backgroundColor:'#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    fabText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})