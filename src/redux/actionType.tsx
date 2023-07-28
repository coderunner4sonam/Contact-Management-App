// Each of these action functions returns a structured action object that will be dispatched to the Redux store when called. 
// The corresponding action type and payload are used in the reducer to update the state based on the specific action.     
// These action creators make it easier to create and dispatch actions in the Redux store 

import {contactData} from "./actionReducer"

export interface EditPayloadType {
    index: number,
    editedRecords: contactData
}

export const CREATE_CONTACT=(payload:contactData)=>{
    return {
        type:"CREATE_CONTACT",
        payload
    }
}

export const EDIT_CONTACT=(payload:EditPayloadType)=>{
    return {
        type:"EDIT_CONTACT",
        payload
    }
}

export const DELETE_CONTACT=(payload:number)=>{
    return {
        type:"DELETE_CONTACT",
        payload
    }
}

export const CHANGE_TITLE=(payload:string)=>{
    return {
        type:"CHANGE_TITLE",
        payload
    }
}






