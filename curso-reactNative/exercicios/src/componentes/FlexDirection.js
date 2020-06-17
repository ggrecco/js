import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    q1:{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    q2:{
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end', 
    },
    q3:{
        flex:1,
        backgroundColor: 'yellow',
        flexDirection: 'column-reverse'
    },
    quadrado: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
       
    }

})

const Quadrado = props => <View style={styles.quadrado}></View>

export default FlexDirectionBasics = () => {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <View style={styles.q1} >
            <Quadrado />
        </View>
        <View style={styles.q2} >
            <Quadrado />
        </View>
        <View style={styles.q3} >
            <Quadrado />
        </View>
      </View>
    );
};