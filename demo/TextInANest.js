import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest'
        };
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={5}>
                    {this.state.bodyText}
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'cochin'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
