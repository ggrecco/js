import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'


export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo!"/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par e Impar'}
    },
    Simples: {
        screen: () => <Simples texto="Simples" nome="Gustavo" />
    }
}, {drawerWidth: 300}) // linha que esoecifica a largura do drawer