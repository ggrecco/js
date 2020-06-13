import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// essa exportação deve conter chaves {}
export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export default Inverter

export const MegaSena = props => {
    const [min, max] = [1,60]
    const numeros = Array(6).fill(0)

    for ( let i = 0; i < numeros.length; i++ ) {
        let novo = 0
        // laço "enquanto" para inserir valores não repetidos no array 
        while (numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1 )) + min
        }
        numeros[i] = novo
    }
    // ordena numeros de forma crescente
    numeros.sort((a,b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(',')}</Text>
}