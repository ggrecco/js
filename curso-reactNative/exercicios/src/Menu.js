import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import {TextoSincronizado} from './componentes/ComunicacaoIndireta'
// import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
import FlexDirectionBasic from './componentes/FlexDirection'
import FlatListApp from './componentes/FlatList'



export default createDrawerNavigator({
    FlatListApp: {
        screen: FlatListApp
    },
    FlexDirectionBasic:{
        screen: FlexDirectionBasic
    },
    Flex: {
        screen: Flex
    },
    // ListaFlex: {
    //     screen: ListaFlex,
    //     navigationOptions: {title: 'Lista'}
    // },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
        // screen: Avo
        screen: () => <Avo nome={"Mario"} sobrenome={"da silva"}/>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={95}/>
    },
    Plataformas: {
        // screen: () => <Plataformas />
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={10} />
    },
    MegaSena: {
        screen: () => <MegaSena />,
        //texto que será mostrado no menu de navegação
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="React nativo!"/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par e Impar'}
    },
    Simples: {
        screen: () => <Simples texto="Simples" nome="Gustavo" />
    }
}, {drawerWidth: 300}) // linha que especifica a largura do drawer