import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

// ErrorContact component serves as a user-friendly and informative way to notify users 
// when there are no contacts available suggests possible actions to address the issue.


const ErrorContact: React.FC = () => {
  return (
    <div style={{marginTop:"8%",display: 'flex', justifyContent: 'center',   alignItems: 'center', cursor: 'pointer',  color: '#3C3CF6',
      height: '100%' }} >
      
        {/* <FontAwesomeIcon icon={faX} /> */}

        <div style={{ display: 'flex',flexDirection: 'column',border: '2px solid black',cursor: 'pointer', width: '40%',
            textAlign: 'center', color:"black",borderRadius:"5px"}}>
          <p><b>No contact found</b></p>
          <p><b>Please add contact form</b></p>
          <p><b>Create a contact button</b></p>
        </div>
    </div>
  );
};

export default ErrorContact;
