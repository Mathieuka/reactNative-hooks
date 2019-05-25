import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'

const lengthInput = (input) => {
    
    const [inputLength,setInputLength] = useState(0);
    
    useEffect(()=>{
        setInputLength(()=>input.length)
    },[input])
    
    return inputLength;
}

export default lengthInput
