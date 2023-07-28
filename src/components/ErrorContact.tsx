import React, { useState } from 'react';

const ErrorContact: React.FC = () => {
  // State to control the visibility of the error popup
  const [popup, setPopup] = useState<Boolean>(true);

  return (
    // Render the error popup only when `popup` is true
    popup && 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '40%', marginTop: '8%', display: 'flex', justifyContent: 'space-around', cursor: 'pointer', color: '#3C3CF6', height: '100%', border: '2px solid black' }} > 
        {/* Close button */}
        <div style={{ width: '30%', marginTop: '6%' }}>
          <div onClick={() => setPopup(false)} style={{ height: '50px', width: '50px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '1px solid black', backgroundColor: 'black' }}>
            <h2 style={{ color: 'white', paddingLeft: '14px', paddingTop: '4px' }}>X</h2>  
          </div>
        </div>
        {/* Error message and suggestions */}
        <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', width: '40%', textAlign: 'center', color: 'black', borderRadius: '5px' }}>
          <p><b>No contact found</b></p>
          <p><b>Please add a contact using the form</b></p>
          <p><b>Create a contact button</b></p>
        </div>
      </div>
    </div>
  );
};

export default ErrorContact;
