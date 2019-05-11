import React, { Component } from 'react';
import { View } from 'react-native';
import App from './App';
import Demo1 from './Demo1';


export default class Main extends Component {
    render() {
        return (
            <View>
             <App />
            <Demo1 />
            </View>
            );
    }
}