import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Demo6 extends Component {
    render() {
        return (
            <View>
                <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
            </View>
        );
    }
}

class MyAppHeaderText extends Component {
    render() {
        return (
            <Text style={{ fontSize: 20 }} selectable={false}> {this.props.children}</Text>
        );
    }
}


