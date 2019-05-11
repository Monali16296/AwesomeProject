import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({    
    android: 'Double tap R on your keyboard to reload,\n'    
});


export default class Demo1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>Hello Monalis!</Text>
                <Text style={{ color: 'red' }}>Monu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
   
});
