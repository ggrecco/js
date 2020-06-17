import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';


const DATA = [
  {id: 1, nome: 'João', nota: 7.9 },
  {id: 2, nome: 'Maria', nota: 9.1 },
  {id: 3, nome: 'José', nota: 8.4 },
  {id: 4, nome: 'Gustavo', nota: 10.0 },
  {id: 5, nome: 'Karim', nota: 6.8 },
  {id: 6, nome: 'Darth', nota: 7.1 },
  {id: 7, nome: 'Vader', nota: 5.4 },
  {id: 8, nome: 'Rafael', nota: 2.8 },
  {id: 9, nome: 'Janeiro', nota: 9.8 },
  {id: 10, nome: 'Fevereiro', nota: 9.8 },
  {id: 11, nome: 'Carlos', nota: 7.9 },
  {id: 12, nome: 'Bia', nota: 9.1 },
  {id: 13, nome: 'Luiz', nota: 8.4 },
  {id: 14, nome: 'Tereza', nota: 10.0 },
  {id: 15, nome: 'Leopoldo', nota: 6.8 },
  {id: 16, nome: 'Gaina', nota: 7.1 },
  {id: 17, nome: 'File', nota: 5.4 },
  {id: 18, nome: 'Sardinha', nota: 2.8 },
  {id: 19, nome: 'Preta', nota: 9.8 },
];
//passa o id mas nao mostra
function Item({ id, nome, nota }) {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 20, color: 'yellow'}}>{id}) Nome: {nome}</Text>
      <Text style={{fontSize: 18, color: 'white'}}>Nota: {nota}</Text>
    </View>
  );
}

//permite que importe qualquer nome no Menu.js
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item id={item.id} nome={item.nome} nota={item.nota} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
  }, 
});

