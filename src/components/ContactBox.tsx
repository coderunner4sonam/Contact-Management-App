import React from "react";
import { contactData } from "../redux/actionReducer";
import { useNavigate } from "react-router-dom";
import { DELETE_CONTACT } from "../redux/actionType";
import { useDispatch } from "react-redux";

interface contactDataProps {
  index: number;
  editedRecords: contactData;
}

// ContactBox Component renders a box with contact information and two buttons: "Edit" and "Delete." 
// The component takes two props: 1.index: A number representing the index of the contact in the array.
// 2.editedRecords: An object representing the contact's data with properties like firstName, lastName, and status.
// The component uses React Router's useNavigate hook for navigation & React Redux's useDispatch hook to dispatch actions. 
// When the "Edit" button is clicked, it navigates to a specific URL based on the contact's index for editing purposes. 
// When the "Delete" button is clicked, it dispatches a Redux action with the DELETE_CONTACT action type and the contact's index as the payload, 
// to delete the contact from the application state.

const ContactBox: React.FC<contactDataProps> = ({ index, editedRecords }) => {
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch();

  return (
    <div
      style={{
        marginTop:"5%",
        borderRadius:"5px",
        border: "2px solid black",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#F3F3F3",
        width: "calc(23.33% - 20px)", // Three cards in one row with some spacing between them
        margin: "10px",
        display: "inline-block", // Display the cards inline
      }}
    >
      <p>
        <strong>FirstName:</strong> {editedRecords.firstName}
      </p>
      <p>
        <strong>LastName:</strong> {editedRecords.lastName}
      </p>
      <p>
        <strong>Status:</strong> {editedRecords.status ? "active" : "inactive"}
      </p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button style={{ color: "white", height: "40px", width: "80px", borderRadius: "5px", backgroundColor: "#97BE7B", marginBottom: "10px" }} onClick={() => NAVIGATE(`/${index}`)}>
          Edit
        </button>
        <button style={{ color: "white", height: "40px", width: "80px", borderRadius: "5px", backgroundColor: "#D09393" }} onClick={() => DISPATCH(DELETE_CONTACT(index))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactBox;

