import React, { Component } from 'react';
import { View, Text } from 'react-native';

class New1 extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}

export default class Demo3 extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <New1 name="Sonu" />
                <New1 name="Mohit" />
            </View>
        );
    }
}