import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  {contactData}  from '../redux/actionReducer'
import { useDispatch } from 'react-redux'
import { CREATE_CONTACT } from '../redux/actionType'
      
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>   
      <div>
        <div style={{border:"1px solid black", backgroundColor:"white", width:"30vw",height:"60vh",textAlign:"center"}}>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label><h3>FirstName: </h3></label>
              <input  style={{height:"35px", border:"1px solid black",width:"200px",marginLeft:"10px"}}type="text" placeholder=' please enter firstName' onChange={(e)=>setDataContact({...dataContact, firstName:e.target.value})}/>
            </div>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label><h3>LastName: </h3></label>
              <input style={{height:"35px", border:"1px solid black",width:"200px",marginLeft:"10px"}} type="text" placeholder=' please enter lastName' onChange={(e)=>setDataContact({...dataContact, lastName:e.target.value })}/>
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
          <button style={{backgroundColor:"#CCCCCC"}} onClick={handleContactData} >Save Contact</button>
        </div>
      </div>
     
    </div>
  )
}

export default CreateContact
