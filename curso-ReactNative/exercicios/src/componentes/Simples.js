import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default (props) => {
//     return <Text>Arrow: {props.texto}</Text>
// }
// export default (props, nome) => <Text>Arrow: {props.texto},{props.nome}</Text>

export default (props, nome) => [
    <Text key={1} style={[Padrao.ex]}>Arrow1: {props.texto}{props.nome}</Text>,
    <Text key={2}>Arrow2: {props.texto}{props.nome}</Text>
]