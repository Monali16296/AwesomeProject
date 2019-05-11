import React, { Component } from 'react';
import { View } from 'react-native';
import App from './App';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './demo/Demo3';

export default class Main extends Component {
    render() {
        return (
            <View>
                <App />
                <Demo1 />
                <Demo2 />
                <Demo3 />
            </View>
        );
    }
}