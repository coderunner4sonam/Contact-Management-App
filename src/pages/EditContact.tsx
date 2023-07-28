import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { contactData } from '../redux/actionReducer';
import { EDIT_CONTACT } from '../redux/actionType';
import { EditPayloadType } from '../redux/actionType';

const EditContact: React.FC = () => {
  // Get the contact ID from the URL params
  const { id } = useParams();

  // Get the contact data from the Redux store using the useSelector hook
  const contactsStore = useSelector((state: RootState) => state);
  const editedRecords = contactsStore.contactRecords[Number(id)];

  // React Router's useNavigate hook for navigation between pages
  const NAVIGATE = useNavigate();

  // Get the Redux dispatch function to dispatch actions
  const DISPATCH = useDispatch();

  // Local state to manage the data for the edited contact
  const [dataContact, setDataContact] = useState<contactData>({
    firstName: editedRecords?.firstName || '',
    lastName: editedRecords?.lastName || '',
    status: editedRecords?.status || '',
  });

  // Function to handle changes in the status radio buttons
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataContact({
      ...dataContact,
      status: e.target.value,
    });
  };

  // Function to handle the submission of the edited contact data
  function handleContactData() {
    const EditPayload: EditPayloadType = {
      index: Number(id),
      editedRecords: dataContact,
    };
    DISPATCH(EDIT_CONTACT(EditPayload));
    console.log(dataContact);
    NAVIGATE('/');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <div style={{ border: '1px solid black', backgroundColor: 'white', width: '30vw', height: '60vh', textAlign: 'center' }}>
          {/* Input fields for First Name */}
          <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <h3>FirstName: </h3>
            </label>
            <input
              value={dataContact.firstName}
              style={{ height: '35px', border: '1px solid black', width: '200px', marginLeft: '10px' }}
              type="text"
              placeholder="Please enter firstName"
              onChange={(e) => setDataContact({ ...dataContact, firstName: e.target.value })}
            />
          </div>

          {/* Input fields for Last Name */}
          <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>
              <h3>LastName: </h3>
            </label>
            <input
              value={dataContact.lastName}
              style={{ height: '35px', border: '1px solid black', width: '200px', marginLeft: '10px' }}
              type="text"
              placeholder="Please enter lastName"
              onChange={(e) => setDataContact({ ...dataContact, lastName: e.target.value })}
            />
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

        {/* Button to save the edited contact data */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
          <button style={{ backgroundColor: '#CCCCCC' }} onClick={handleContactData}>
            Save Edited Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
