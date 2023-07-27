import React from "react";
import { useNavigate } from "react-router-dom";

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
