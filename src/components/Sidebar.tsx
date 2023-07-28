import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CHANGE_TITLE } from "../redux/actionType";

const Sidebar: React.FC = () => {
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch();

  // Function to handle navigation to the "Contact" page
  function handleContact() {
    DISPATCH(CHANGE_TITLE("Contact Page"));
    NAVIGATE("/");
  }

  // Function to handle navigation to the "Chats and Maps" page
  function handleChartsandMaps() {
    DISPATCH(CHANGE_TITLE("Charts and Maps"));
    NAVIGATE("/chartsmaps");
  }

  return (
    <div>
      {/* Clickable section for the "Contact" page */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px solid black", cursor: "pointer", color: "#3C3CF6" }}>
        <h4 onClick={handleContact}>Contact</h4>
      </div>
      {/* Clickable section for the "Chats and Maps" page */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px solid black", cursor: "pointer", color: "#3C3CF6" }}>
        <h4 onClick={handleChartsandMaps}>Chats and Maps</h4>
      </div>
    </div>
  );
};

export default Sidebar;
