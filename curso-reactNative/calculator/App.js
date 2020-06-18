import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from './src/components/Buttom'
import Display from './src/components/Display'


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,

}

export default class App extends Component {
  state = { ...initialState }

  addDigit = n => {
    //valida ter zero apenas depois de um numero e concatena os numeros digitados
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    //valida utilizar apenas 1 ponto
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return 
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue 
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({...initialState })
  }

  setOperation = operation => {
    if(this.state.current == 0){
      //ao precionar um operador  seta para apagar o numero quando precionado um novo numero
      this.setState({ operation, current:1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        //realzia valor1 operação valor2
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch (e) {
        //garante que se um valor errado for enviado não quebra o programa
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`, //o valor passado sempre será uma string
        operation: equals ? null : operation, //se a operação for = seta para null
        current: equals ? 0 : 1, //caso for pressionado = seta os valor no aray na posição 0
        // clearDisplay: !equals,
        clearDisplay: true,
        values,
      })
    }
  }
render() {
  return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
          <View style={styles.buttons}>
            <Button label="AC" triple onClick={this.clearMemory} />
            <Button label="/" operation onClick={this.setOperation} />
            <Button label="7" onClick={this. addDigit}/>
            <Button label="8" onClick={this.addDigit}/>
            <Button label="9" onClick={this.addDigit}/>
            <Button label="*" operation onClick={this.setOperation} />
            <Button label="4" onClick={this.addDigit}/>
            <Button label="5" onClick={this.addDigit}/>
            <Button label="6" onClick={this.addDigit}/>
            <Button label="-" operation onClick={this.setOperation} />
            <Button label="1" onClick={this.addDigit}/>
            <Button label="2" onClick={this.addDigit}/>
            <Button label="3" onClick={this.addDigit}/>
            <Button label="+" operation onClick={this.setOperation} />
            <Button label="0" double onClick={this.addDigit}/>
            <Button label="." onClick={this.addDigit}/>
            <Button label="=" operation onClick={this.setOperation} />
          </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap' //quebra automatica de linhas
  },
});
