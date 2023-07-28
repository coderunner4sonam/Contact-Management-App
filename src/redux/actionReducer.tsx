// this code sets up a Redux store with a reducer to manage contact records. 
// The reducer handles actions to create, edit, and delete contacts 
//  it maintains the state containing an array of contact objects.
// The state is initialized with two sample contacts.

export interface contactData {
    firstName:string,
    lastName:string,
    status:string,
}

interface contactRecordType {
    contactRecords:contactData[],
    title:string
}

interface actionType {
    type:string,
    payload:any
}

const INITIAL_STATE:contactRecordType = {
    contactRecords:[
        {
            firstName:"Sonam",
            lastName:"Murarkar",
            status:"active"
        },
        {
            firstName:"Sonal",
            lastName:"Kotangale",
            status:"inactive"
        }
    ],
    title:"Contact Page"
} 

export const actionReducer = (state=INITIAL_STATE,action:actionType)=>{
    switch (action.type) {
        case "CREATE_CONTACT": 
            let newContact=[...state.contactRecords,action.payload];
            return {
                ...state,
                contactRecords:newContact
            }
        
        case "EDIT_CONTACT":
            let updateContact=[...state.contactRecords];
            updateContact[action.payload.index]=action.payload.editedRecords;
            return {
                ...state,
                contactRecords:updateContact
            }   

        case "DELETE_CONTACT":
            let deleteContact=[...state.contactRecords];
            deleteContact.splice(action.payload,1);
            return {
                ...state,
                contactRecords:deleteContact
            }
        case "CHANGE_TITLE":
            return {
                ...state,
                title:action.payload
            }
        default:
            return state
            
         
    }
}
















