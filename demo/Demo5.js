import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Demo5 extends Component {
    render() {
        return (
            <View>
                <Text style={[styles.blue, styles.red]}> last css has higher precedence, here red is last so it will be applied</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    red: {
        color: 'red'
    }
});
