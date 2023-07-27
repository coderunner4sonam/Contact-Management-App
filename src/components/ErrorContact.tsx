import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorContact:React.FC = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", border:"0.5px solid black",cursor:"pointer",color:"#3C3CF6",height:"100%" }}>
     {/* <FontAwesomeIcon icon="fa-solid fa-cross" /> */}
     <div style={{ border:"0.5px solid black",cursor:"pointer",color:"#3C3CF6",width:"40%",alignItems:"center",textAlign:"center" }}>
      <p>No contact found</p> 
      <p>Please add contact form</p>
      <p>Create a contact button</p>
      </div>
    </div>
  )
}

export default ErrorContact
