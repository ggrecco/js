import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

import params from './src/params'
import Field from './src/components/Field.js'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40}}>Iniciando o Mines!</Text>
        <Text style={{ fontSize:30}}>Grade:{params.getRowAmout()} x {params.getColumnsAmout()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={2}/>
      </View> 
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})