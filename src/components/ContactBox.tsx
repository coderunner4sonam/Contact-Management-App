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
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch();

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      {/* Contact information box */}
      <div
        style={{
          borderRadius: "5px",
          border: "2px solid black",
          padding: "10px",
          marginBottom: "5px",
          backgroundColor: "#F3F3F3",
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Edit button */}
        <button
          style={{
            flex: 1,
            color: "white",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "#97BE7B",
            marginRight: "5px",
          }}
          // When the "Edit" button is clicked, navigate to the edit page for the contact
          onClick={() => NAVIGATE(`/${index}`)}
        >
          Edit
        </button>
        {/* Delete button */}
        <button
          style={{
            flex: 1,
            color: "white",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "#D09393",
            marginLeft: "5px",
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
