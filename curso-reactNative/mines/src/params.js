import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //porcentagem que representa panel superior
    difficultLevel: 0.1,

    getColumnsAmout(){
        const width = Dimensions.get('window').width //captura tamanho da tela
        return Math.floor(width / this.blockSize)
    },
    
    getRowAmout(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - params.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params