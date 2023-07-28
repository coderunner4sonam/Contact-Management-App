import React from "react";
import { contactData } from "../redux/actionReducer";
import { useNavigate } from "react-router-dom";
import { DELETE_CONTACT } from "../redux/actionType";
import { useDispatch } from "react-redux";

interface contactDataProps {
  index: number;
  editedRecords: contactData;
}

const ContactBox: React.FC<contactDataProps> = ({ index, editedRecords }) => {
  // Use the useNavigate hook from React Router to enable navigation
  const NAVIGATE = useNavigate();

  // Use the useDispatch hook from React Redux to dispatch actions
  const DISPATCH = useDispatch();

  return (
    <div style={{ width: "40%" }}>
      {/* Contact information box */}
      <div
        style={{
          marginTop: "5%",
          borderRadius: "5px",
          border: "2px solid black",
          padding: "10px",
          marginBottom: "5px",
          backgroundColor: "#F3F3F3",
          margin: "10px",
          textAlign: "center",
          height: "150px",
        }}
      >
        {/* Display the first name of the contact */}
        <p>
          <strong>FirstName:</strong> {editedRecords.firstName}
        </p>
        {/* Display the last name of the contact */}
        <p>
          <strong>LastName:</strong> {editedRecords.lastName}
        </p>
        {/* Display the status of the contact */}
        <p>
          <strong>Status:</strong> {editedRecords.status ? "active" : "inactive"}
        </p>
      </div>
      {/* Buttons for editing and deleting the contact */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Edit button */}
        <button
          style={{
            color: "white",
            height: "40px",
            width: "80px",
            borderRadius: "5px",
            backgroundColor: "#97BE7B",
            marginBottom: "5px",
          }}
          // When the "Edit" button is clicked, navigate to the edit page for the contact
          onClick={() => NAVIGATE(`/${index}`)}
        >
          Edit
        </button>
        {/* Delete button */}
        <button
          style={{
            color: "white",
            height: "40px",
            width: "80px",
            borderRadius: "5px",
            backgroundColor: "#D09393",
          }}
          // When the "Delete" button is clicked, dispatch the DELETE_CONTACT action with the contact's index as the payload
          onClick={() => DISPATCH(DELETE_CONTACT(index))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactBox;
