import React from "react";
import { contactData } from "../redux/actionReducer";
import { useNavigate } from "react-router-dom";
import { EDIT_CONTACT } from "../redux/actionType";

interface contactDataProps {
  index: number,
  editedRecords: contactData
}

const ContactBox: React.FC<contactDataProps> = ({ index,editedRecords}) => {
  const NAVIGATE = useNavigate()
  const payloadData:contactDataProps={
    index,editedRecords
  }

  return (
    <div >
      <p>FirstName: {editedRecords.firstName}</p>
      <p>LastName: {editedRecords.lastName}</p>
      <p>Status: {editedRecords.status?"active":"inactive"}</p>
      {/* <button onClick={()=>DISPATCH(EDIT_CONTACT(payloadData))}>Edit</button> */}
      <button onClick={()=>NAVIGATE(`/${index}`)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ContactBox;
