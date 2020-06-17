//não funciona
import React from 'react'
import { View, Text, ScrolView, FlatList } from 'react-native'

const alunos = [
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
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD', 
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) =>{
        return <Aluno {...item} />
    }

    return (
        <ScrolView>
            <FlatList data={alunos} renderItem={renderItem}
                      keyExtractor={item => item.id} />
        </ScrolView>
    )
}

