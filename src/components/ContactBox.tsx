import React from "react";
import { contactData } from "../redux/actionReducer";
import { useNavigate } from "react-router-dom";
import { DELETE_CONTACT} from "../redux/actionType";
import { useDispatch } from "react-redux";

interface contactDataProps {
  index: number,
  editedRecords: contactData
}

const ContactBox: React.FC<contactDataProps> = ({ index,editedRecords}) => {
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch()
  const payloadData:contactDataProps={
    index,editedRecords
  }

  return (
    <div >
      <p>FirstName: {editedRecords.firstName}</p>
      <p>LastName: {editedRecords.lastName}</p>
      <p>Status: {editedRecords.status?"active":"inactive"}</p>
      <button onClick={()=>NAVIGATE(`/${index}`)}>Edit</button>
      <button onClick={()=>DISPATCH(DELETE_CONTACT(index))}>Delete</button>
    </div>
  );
};

export default ContactBox;
