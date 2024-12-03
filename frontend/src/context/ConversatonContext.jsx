import {createContext, useReducer } from "react";

export const ConversationContext=createContext();
const initialState={
    selectedConversation:null,
    messages:[]
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'setSelectedConversation':
            return {...state,selectedConversation:action.payload}
        case 'setMessages':
            return {...state,messages:action.payload}
        default:
            return state;
    }
}
export const ConversationContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const value={state,dispatch};
    return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>
}

