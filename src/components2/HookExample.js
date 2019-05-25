import React, {useState, useEffect} from 'react';
import {View, Text, Button } from 'react-native';
import OtherComponent from './OtherComponent';
import axios from "axios"

const HookExample = () => {
    // Different state.
    // First element in array is a variable and the second is the function for handle the state.
    const [count2, setCount2]        = useState(0);
    let   [count, setCount]          = useState(0);
    let   [req, jsonPLaceHolderFunctionRequest] = useState(null);
    let   [displayOtherComponent, hide] = useState(true)

// This function is passed to the onPress event of the button 
addCount = () => {
    // We handle state count and count2 with the function setCount and setCount2
    setCount2(()=>count2+2);
    setCount(()=>count+1);
}

async function request() {
    const callRep = axios('https://jsonplaceholder.typicode.com/posts/3');
    const response = await callRep;
    // We handle state req with jsonPLaceHolderFunctionRequest function
    jsonPLaceHolderFunctionRequest(()=>req = response.data.title);
}        


// useEffect function is call when the component is rendered and when is mounted et unmounted
useEffect(()=>{
    if(count === 3){
        request();
    }
    //LOGIC: if count is modulo of two we hide  <displayOtherComponent/>
    count % 2 === 0 ?  hide(()=>displayOtherComponent=false) :  hide(()=>displayOtherComponent=true)
},[count]); //NOTE: <== we can specify re-run the Effect only if "count" change by passing an array in second argument;
            // IMPORTANT: If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 
            // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
            // This isn’t handled as a special case — it follows directly from how the dependencies array always works.

    return (
        <View>
            <Text>You clicked {count} time</Text>
            <OtherComponent count2={count2} request={req}/>
            <Button title="press me" onPress={addCount}/>
            <View display={displayOtherComponent === true ? "" : "none"}>
                <Text>{req}</Text>
            </View>
        </View>
    )
}

export default HookExample;