import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };


        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }
    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        );
    }
}

export default class Demo4 extends Component {
    render() {
        return (
            <View>
                <Blink text='blink1' />
                <Blink text='blink2' />
                <Blink text='blink3' />
            </View>
        );
    }
}