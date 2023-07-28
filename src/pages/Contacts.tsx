import React from "react";
import { contactData } from "../redux/actionReducer";
import { RootState } from "../redux/store"; // Assuming you have defined RootState type in "./redux/store"
import { useDispatch, useSelector } from "react-redux";
import ErrorContact from "../components/ErrorContact";
import ContactBox from "../components/ContactBox";
import { useNavigate } from "react-router-dom";

const Contacts: React.FC = () => {
  // Access the contacts data from the Redux store
  const contactsStore = useSelector((state: RootState) => state);

  // Get the Redux dispatch function to dispatch actions
  const dispatch = useDispatch();

  // React Router's useNavigate hook for navigation between pages
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#ECE9E4" }}>
      {/* Button to navigate to the "Create Contact" page */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "#3C3CF6",
        }}
      >
        <button
          style={{
            marginTop: "4%",
            background: "#CCCCCC",
            height: "40px",
            width: "150px",
            textAlign: "center",
          }}
          onClick={() => navigate("/createcontact")}
        >
          <b>Create Contact</b>
        </button>
      </div>

      {/* Check if there are any contacts available */}
      {contactsStore.contactRecords.length === 0 ? (
        // Display the ErrorContact component if no contacts are found
        <ErrorContact />
      ) : (
        // Render the list of contacts using the ContactBox component
        <div style={{ display: "flex", justifyContent: "space-around", gap: "2.5em", flexWrap: "wrap", marginTop: "30px" }}>
          {contactsStore.contactRecords.map((element: contactData, index: number) => (
            <ContactBox key={index} editedRecords={element} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;
