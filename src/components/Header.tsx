import React from 'react'

// Header component is rendering the header section of a "Contact Page." 
// It creates a simple header with a centered title, "Contact Page," displayed on a colored background.

const Header:React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center", height:"10vh",border:"1px solid #3C3CF6",backgroundColor:"#306894" }}>
      <h2 style={{color:"white"}}>Contact Page</h2> 
    </div>
  )
}

export default Header
