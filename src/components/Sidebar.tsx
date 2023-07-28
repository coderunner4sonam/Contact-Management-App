import React from "react";
import { useNavigate } from "react-router-dom";
  
// the Sidebar component is use to navigate between 
// the "Contact" page and the "Chats and Maps" page in the application using the React Router's useNavigate hook.
// It consists of two clickable sections, each displaying a title, and when clicked, 
// it uses the useNavigate hook from React Router to navigate to different pages.

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", border:"0.5px solid black",cursor:"pointer",color:"#3C3CF6"   }}>
        <h3 onClick={()=>navigate("/")}>Contact</h3>
      </div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", border:"0.5px solid black",cursor:"pointer",color:"#3C3CF6"  }}>
        <h3 onClick={()=>navigate("/chartsmaps")}>Chats and Maps</h3>
      </div>
    </div>
  );
};

export default Sidebar;
