import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const OtherComponent = (props) => {
    const [name, pluralizeName] = useState("bouliche");
    const [age, setAge] = useState(33);

    const pluralize = () => {
        pluralizeName(()=> { //NOTE:  pluralizeName() is function of useState()
            return name = name === "bouliche" ? name + "s" : name;
        });
    }
    useEffect(()=>{
        if(name.split('')[name.length-1] === 's' ){
            name = `${name} is pluralized`;
        }
    },[name]);

    const incrementAge = () => {
        setAge(()=>{        // NOTE: setage() is function of useState()
                    if(age < 50){
                    return age + 10;
                    }
                    return age;
        });
    }
    useEffect(()=>{
        if(age > 50){
            age = `${age} is age of the yooooo!`;
        }
    },[age]);

    return (
        <View>
            <Text>second counter => {props.count2}</Text>
            <Text>{props.request}</Text>
            <TouchableOpacity onPress={pluralize}>
                <Text>{name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementAge}>
                <Text>{age}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OtherComponent;
