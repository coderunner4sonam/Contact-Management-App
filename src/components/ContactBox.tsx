import React from 'react';
import { contactData } from "../redux/actionReducer";

const ContactBox: React.FC<contactData> = ( {contactRecord} ) => {
    
    return (
      <div>
        <p>Name: {contactRecord.firstName}</p>
        <p>Email: {contactRecord.lastName}</p>
        <p>Phone: {contactRecord.status}</p>
      </div>
    );
  }
  
  export default ContactBox;
  
  
  
  
  
  
  