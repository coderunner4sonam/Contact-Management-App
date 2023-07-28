import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  {contactData}  from '../redux/actionReducer'
import { useDispatch } from 'react-redux'
import { CREATE_CONTACT } from '../redux/actionType'

// The CreateContact component is represents a page to create a new contact.
// It allows the user to input the contact's first name, last name, and status (active or inactive) using text inputs and radio buttons.
// The user can then save the contact by clicking the "Save Contact" button.

const CreateContact:React.FC = () => {
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch();
  

  const [ dataContact,setDataContact] = useState<contactData>({
    firstName:"",
    lastName:"",
    status:""
  })

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataContact({
      ...dataContact,
      status: e.target.value,
    });

  };
  function handleContactData() {
    console.log("function called")
    DISPATCH(CREATE_CONTACT(dataContact));
    console.log(dataContact)
    NAVIGATE("/")
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', border:"1px solid black" }}>   
      <div>
        <div style={{border:"1px solid black", backgroundColor:"white", width:"30vw",height:"60vh",textAlign:"center",borderRadius:"5px"}}>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label><h3>FirstName: </h3></label>
              <input  style={{borderRadius:"4px",height:"35px", border:"1px solid black",width:"200px",marginLeft:"10px"}}type="text" placeholder=' please enter firstName' onChange={(e)=>setDataContact({...dataContact, firstName:e.target.value})}/>
            </div>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label><h3>LastName: </h3></label>
              <input style={{borderRadius:"4px",height:"35px", border:"1px solid black",width:"200px",marginLeft:"10px"}} type="text" placeholder=' please enter lastName' onChange={(e)=>setDataContact({...dataContact, lastName:e.target.value })}/>
            </div>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <label><h3>Status: </h3></label> 
                <div>
                  <label>  
                    <input type='radio' name="option" value="active" checked={dataContact.status === "active"}
                      onChange={handleStatusChange}/> Active 
                  </label>
                </div>
                <div>
                  <label>  
                    <input type='radio' name="option" value="inactive" checked={dataContact.status === 'inactive'}
                  onChange={handleStatusChange}/> Inactive 
                  </label>
                </div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent: 'center', alignItems: 'center',marginTop:"12px"}}>
          <button style={{backgroundColor:"#CCCCCC",color:"black", height:"40px",width:"150px",borderRadius:"5px" }} onClick={handleContactData} >
            <b>Save Contact</b></button>
        </div>
      </div>
     
    </div>
  )
}

export default CreateContact
