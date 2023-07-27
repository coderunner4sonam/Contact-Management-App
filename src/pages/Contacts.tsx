import React, { useState } from "react";
import {
  DELETE_CONTACT,
  EDIT_CONTACT,
  CREATE_CONTACT,
} from "../redux/actionType";
import { contactData } from "../redux/actionReducer";
import { RootState } from "../redux/store"; // Assuming you have defined RootState type in "./redux/store"
import { useDispatch, useSelector } from "react-redux";
import ErrorContact from "../components/ErrorContact";
import ContactBox from "../components/ContactBox";

const Contacts: React.FC = () => {
  const contactsStore = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button>Create Contact</button>
      { contactsStore.contactRecords.length===0 
      ? 
      <ErrorContact/> 
      :  
      contactsStore.contactRecords.map((element:contactData, index:number)=>(
        <ContactBox contactRecord={element}/>
      ))
      }
    </div>
  )
};

export default Contacts;
