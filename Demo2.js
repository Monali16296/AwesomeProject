import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Demo2 extends Component {
    render() {
        let pic= {
            uri: 'https://4.bp.blogspot.com/--SdX89TSkJs/WvgwrelYWkI/AAAAAAAAEsk/0i8BgOVmI_E3-xYm7xQkAerP4Jaht08_wCK4BGAYYCw/s113/quickgrid_20183259365991.png'
        };
        return (
            <View style={{margin: 150}}>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Text>oo</Text>
            </View>
        );
    }
}