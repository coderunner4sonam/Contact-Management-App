import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactData } from '../redux/actionReducer';
import { useDispatch } from 'react-redux';
import { CREATE_CONTACT } from '../redux/actionType';

const CreateContact: React.FC = () => {
  // React Router's useNavigate hook for navigation between pages
  const NAVIGATE = useNavigate();

  // Get the Redux dispatch function to dispatch actions
  const DISPATCH = useDispatch();

  // Local state to manage the data for the new contact
  const [dataContact, setDataContact] = useState<contactData>({
    firstName: '',
    lastName: '',
    status: '',
  });

  // Function to handle changes in the status radio buttons
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataContact({
      ...dataContact,
      status: e.target.value,
    });
  };

  // Function to handle the submission of the contact data
  function handleContactData() {
    DISPATCH(CREATE_CONTACT(dataContact));
    NAVIGATE('/');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' ,flexDirection:"column"}}>
      <div style={{ width: '80%', maxWidth: '400px', border: '1px solid black', backgroundColor: 'white', padding: '20px', borderRadius: '5px',marginBottom:"20px" }}>
        {/* Input fields for First Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px' }}>FirstName:</label>
          <input
            style={{ borderRadius: '4px', height: '35px', border: '1px solid black', width: '100%', marginTop: '5px' }}
            type="text"
            placeholder="Please enter firstName"
            onChange={(e) => setDataContact({ ...dataContact, firstName: e.target.value })}
          />
        </div>

        {/* Input fields for Last Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px' }}>LastName:</label>
          <input
            style={{ borderRadius: '4px', height: '35px', border: '1px solid black', width: '100%', marginTop: '5px' }}
            type="text"
            placeholder="Please enter lastName"
            onChange={(e) => setDataContact({ ...dataContact, lastName: e.target.value })}
          />
        </div>

        {/* Radio buttons for Status */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px' }}>Status:</label>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <label style={{ marginRight: '10px' }}>
              <input type="radio" name="option" value="active" checked={dataContact.status === 'active'} onChange={handleStatusChange} /> Active
            </label>
            <label>
              <input type="radio" name="option" value="inactive" checked={dataContact.status === 'inactive'} onChange={handleStatusChange} /> Inactive
            </label>
          </div>
        </div>
      </div>
       {/* Button to save the contact data */}
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#CCCCCC', color: 'black', height: '40px', width: '100%', borderRadius: '5px', fontSize: '16px' }} onClick={handleContactData}>
            <b>Save Contact</b>
          </button>
        </div>
    </div>
  );
};

export default CreateContact;
