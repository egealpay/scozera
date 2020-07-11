import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import D_C from '../design-constants';

function BaseView(props) {

    return <View style={{flex: 1, backgroundColor: D_C.white}}>
        {props.children}
    </View>;
}

const styles = StyleSheet.create({});

export default BaseView;
