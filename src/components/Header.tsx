import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Header: React.FC = () => {
  // Access the `title` state from the Redux store using the useSelector hook
  const state = useSelector((state: RootState) => state)

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", border: "1px solid #3C3CF6", backgroundColor: "#306894" }}>
      {/* Display the `title` from the Redux store */}
      <h2 style={{ color: "white" }}>{state.title}</h2>
    </div>
  )
}

export default Header
