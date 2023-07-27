import React from "react";
import { contactData } from "../redux/actionReducer";

interface contactDataProps {
  contactRecord: contactData;
}

const ContactBox: React.FC<contactDataProps> = ({ contactRecord }) => {
  return (
    <div >
      <p>FirstName: {contactRecord.firstName}</p>
      <p>LastName: {contactRecord.lastName}</p>
      <p>Status: {contactRecord.status?"active":"inactive"}</p>
    </div>
  );
};

export default ContactBox;
