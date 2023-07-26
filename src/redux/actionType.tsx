import {contactData} from "./actionReducer"

export const CREATE_CONTACT=(payload:contactData)=>{
    return {
        type:"CREATE_CONTACT",
        payload
    }
}

export const EDIT_CONTACT=(payload:contactData)=>{
    return {
        type:"EDIT_CONTACT",
        payload
    }
}

export const DELETE_CONTACT=(payload:contactData)=>{
    return {
        type:"DELETE_CONTACT",
        payload
    }
}









