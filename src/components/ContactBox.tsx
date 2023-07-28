// import React from "react";
// import { contactData } from "../redux/actionReducer";
// import { useNavigate } from "react-router-dom";
// import { DELETE_CONTACT} from "../redux/actionType";
// import { useDispatch } from "react-redux";

// interface contactDataProps {
//   index: number,
//   editedRecords: contactData
// }

// const ContactBox: React.FC<contactDataProps> = ({ index,editedRecords}) => {
//   const NAVIGATE = useNavigate();
//   const DISPATCH = useDispatch()
//   const payloadData:contactDataProps={
//     index,editedRecords
//   }

//   return (
//     <div >
//       <p>FirstName: {editedRecords.firstName}</p>
//       <p>LastName: {editedRecords.lastName}</p>
//       <p>Status: {editedRecords.status?"active":"inactive"}</p>
//       <button onClick={()=>NAVIGATE(`/${index}`)}>Edit</button>
//       <button onClick={()=>DISPATCH(DELETE_CONTACT(index))}>Delete</button>
//     </div>
//   );
// };

// export default ContactBox;

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
    <div
      style={{
        marginTop:"5%",
        borderRadius:"5px",
        border: "2px solid black",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#F3F3F3",
        width: "calc(33.33% - 20px)", // Three cards in one row with some spacing between them
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button style={{color:"white", height:"40px",width:"80px",borderRadius:"5px" ,backgroundColor: "#97BE7B", marginRight: "10px" }} onClick={() => NAVIGATE(`/${index}`)}>
          Edit
        </button>
        <button style={{color:"white", height:"40px",width:"80px",borderRadius:"5px" ,backgroundColor: "#D09393" }} onClick={() => DISPATCH(DELETE_CONTACT(index))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactBox;
