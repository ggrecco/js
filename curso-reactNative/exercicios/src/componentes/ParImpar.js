import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../estilo/Padrao'

function parOuImpar(num) { 
    // if(num % 2 == 0){
    //     return <Text style={Padrao.ex}>Par</Text> 
    // }else {
    //     return <Text style={[Padrao.ex, Padrao.ex2]}>Impar</Text>
    // }
    // const res = num % 2 == 0 ? 'Par' : 'Impar'
    // return <Text style={Padrao.ex}>{res}</Text>

    const res = num % 2 == 0 
                ? <Text style={Padrao.ex}>Par</Text> 
                : <Text style={[Padrao.ex, Padrao.ex2]}>Impar</Text>
    return res
}
 

export default props => 
        <View>
            {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={[Padrao.ex, Padrao.ex2]}>Impar</Text>
        } */}
    </View>
        
