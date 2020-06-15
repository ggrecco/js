// codigo para poder alterar algum component
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Padrao from '../estilo/Padrao'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm() {
         this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: this.props.numero })
    }

    render() {
        return (
        <View>
            <Text style={{fontSize: 50}}>{this.state.numero}</Text>
            <TouchableHighlight
                onPress={() => this.maisUm()}
                onLongPress={this.limpar}>
                <Text style={Padrao.ex}>Incrementar/Zerar</Text>
            </TouchableHighlight>
        </View>
            )
    }
}