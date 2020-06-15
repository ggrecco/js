import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msg => {
        if( Platform.OS === 'android' ) {
            // SHORT ou LONG é o tempo de exebição do alerta
            ToastAndroid.show( msg,ToastAndroid.LONG)
        } else {
            Alert.alert('titulo do alerta', msg)
        }
    }
    return (
        <Button title='Plataforma?' onPress={() => notificar('Parabens!')} />
    )
}