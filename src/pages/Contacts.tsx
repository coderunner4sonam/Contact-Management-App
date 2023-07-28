import React from "react";
import { contactData } from "../redux/actionReducer";
import { RootState } from "../redux/store"; // Assuming you have defined RootState type in "./redux/store"
import { useDispatch, useSelector } from "react-redux";
import ErrorContact from "../components/ErrorContact";
import ContactBox from "../components/ContactBox";
import { useNavigate } from "react-router-dom";

const Contacts: React.FC = () => {
  const contactsStore = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", border:"0.5px solid black",cursor:"pointer",color:"#3C3CF6" }}>
        <button onClick={()=>navigate("/createcontact")}>Create Contact</button>
      </div>
      { contactsStore.contactRecords.length===0 
      ? 
      <ErrorContact/> 
      :  
      contactsStore.contactRecords.map((element:contactData, index:number)=>(
        <ContactBox editedRecords={element} index={index}/>
      ))
      }
    </div>
  )
};

export default Contacts;
