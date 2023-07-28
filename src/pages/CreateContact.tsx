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
    console.log('function called');
    DISPATCH(CREATE_CONTACT(dataContact));
    console.log(dataContact);
    NAVIGATE('/');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', border: '1px solid black' }}>
      <div>
        <div style={{ border: '1px solid black', backgroundColor: 'white', width: '30vw', height: '60vh', textAlign: 'center', borderRadius: '5px' }}>
          {/* Input fields for First Name */}
          <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <h3>FirstName: </h3>
            </label>
            <input style={{ borderRadius: '4px', height: '35px', border: '1px solid black', width: '200px', marginLeft: '10px' }} type="text" placeholder="Please enter firstName" onChange={(e) => setDataContact({ ...dataContact, firstName: e.target.value })} />
          </div>

          {/* Input fields for Last Name */}
          <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <h3>LastName: </h3>
            </label>
            <input style={{ borderRadius: '4px', height: '35px', border: '1px solid black', width: '200px', marginLeft: '10px' }} type="text" placeholder="Please enter lastName" onChange={(e) => setDataContact({ ...dataContact, lastName: e.target.value })} />
          </div>

          {/* Radio buttons for Status */}
          <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <h3>Status: </h3>
            </label>
            <div>
              <label>
                <input type="radio" name="option" value="active" checked={dataContact.status === 'active'} onChange={handleStatusChange} /> Active
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="option" value="inactive" checked={dataContact.status === 'inactive'} onChange={handleStatusChange} /> Inactive
              </label>
            </div>
          </div>
        </div>

        {/* Button to save the contact data */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
          <button style={{ backgroundColor: '#CCCCCC', color: 'black', height: '40px', width: '150px', borderRadius: '5px' }} onClick={handleContactData}>
            <b>Save Contact</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
