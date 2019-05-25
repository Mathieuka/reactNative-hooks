import React,{useState,useEffect} from 'react'
import {clientListData} from "../clientListData";

//IMPORTANT: this function component his a custom hook, his have just one responsibility.
// his responsibility is just say if the client is online or not or if the client is not in database.
export function useClientStatus(clientId){
    let [isOnline, getIsOnline] = useState(null);
    if(clientId){
        const [ client ] = clientListData.filter(client=> clientId === client.id);
        if(client){
            if(client.isConnected){
            isOnline = `Client id num ${clientId} is connected`;
            return isOnline;
            }
            if(!client.isConnected){
            isOnline = `Client id num ${clientId} is not connected`;
            return isOnline;
            }
        }else{
            isOnline = `Client id num ${clientId} is not in database`;
            return isOnline;
        }
    }
    if(!clientId){
        isOnline = "Chose an client id"
        return isOnline;
    }
     
}
