import React,{useState} from 'react';
import {View,Text,TextInput} from 'react-native';
import lengthInput from '../customHook/lengthInput'; 
const TextInput1 = () => {
    const [inputValue,setInput] = useState('');
    const lengthOfInput = lengthInput(inputValue).toString();
    
    const onChange = (text) => {
        setInput(()=>text)
    }
    
    return (
        <View>
            <TextInput
            style={{width:100,height: 40, borderColor: 'gray', borderWidth: 1}}
            value={inputValue}
            onChangeText={(text)=>onChange(text)}
            />
            <View style={{paddingTop:10}}>
                <TextInput
                style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1}}
                value={lengthOfInput}
                />
            </View>
        </View>
    )
}

export default TextInput1
