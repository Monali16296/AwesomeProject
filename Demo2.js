import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Demo2 extends Component {
    render() {
        let pic= {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{margin: 150}}>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Text>oo</Text>
            </View>
        );
    }
}