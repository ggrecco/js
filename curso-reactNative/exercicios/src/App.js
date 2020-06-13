import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples.js'

export default class App extends React.Component {
    render() {
        return ( 
          <View style={styles.container}>
            <Simples texto="Nome: " nome="Gustavo"/>
            {/* <Text style={styles.f20}>Agora depois do Reload!</Text>  */}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // f20: {
  //   fontSize: 50
  // }
})