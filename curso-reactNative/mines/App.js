import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'


export default class App extends Component{


  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowAmout()
    return Math.ceil(cols * rows * params.difficultLevel)
  } 

  createState = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowAmout()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Grade:{params.getRowAmout()} x {params.getColumnsAmout()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View> 
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  board: {
    alignItems: 'center', 
    backgroundColor:'#AAA',
  }
})