export interface contactData {
    firstName:string,
    lastName:string,
    status:string,
}

interface contactRecordType {
    contactRecords:contactData[]
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
    ]
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
        default:
            return state
            
         
    }
}
















