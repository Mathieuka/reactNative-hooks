import React,{useState} from 'react'
import { View, Text } from 'react-native'

const OtherComponent = (props) => {

    return (
        <View>
            <Text>second counter => {props.count2}</Text>
            <Text>{props.request}</Text>
        </View>
    )
}

export default OtherComponent
