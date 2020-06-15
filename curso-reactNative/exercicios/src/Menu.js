import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'



export default createDrawerNavigator({
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
}, {drawerWidth: 300}) // linha que esoecifica a largura do drawer