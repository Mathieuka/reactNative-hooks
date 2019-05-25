import React,{useState,useEffect} from 'react';
import {View, Text, Button} from 'react-native'
import {useClientStatus} from "../customHook/useClientStatus";

// IMPORTANT: this function component is a hook, his responsibility 
// is just a display info about if specific client is online.
const ClientStatusInfo = (props) => {
    let response = "Is not connected";
    let [clientId, setClient] = useState(0);
    let [colorOfBackground, setBackgroundColor] = useState('red')
    //NOTE: useClientStatus(clientID) is a custom hook
    const isConnected = useClientStatus(clientId);
    const online = (id) => {
      setClient(()=>clientId = id)
    }

    //IMPORTANT: this code ***NOT WORK***
    // clientId > 132 ?  
    //     setBackgroundColor(()=>colorOfBackground = "green") 
    //     :  
    //     setBackgroundColor(()=>colorOfBackground = "red") 

    //NOTE: this code ***WORK WELL*** we use and effect hook for modify some property
    useEffect(()=>{
        clientId > 132 ?  
        setBackgroundColor(()=>colorOfBackground = "green") 
        :  
        setBackgroundColor(()=>colorOfBackground = "red") 
       
    },[clientId]);//NOTE: <== we can specify re-run the Effect only if "clientId" change by passing an array in second argument;
            // IMPORTANT: If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 
            // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
            // This isn’t handled as a special case — it follows directly from how the dependencies array always works.

    return (
        <View style={{backgroundColor:colorOfBackground}}>
            <Button title="press" onPress={()=>online(props.idClientConnected)}/>
            <Text>
                {isConnected}
            </Text>
        </View>        
    )
}

export default ClientStatusInfo;
