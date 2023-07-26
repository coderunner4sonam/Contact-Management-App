import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{display:"flex",flexDirection:"row"}}>
          <div>{/* <Sidebar/> */}</div>
          <div>
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/chartsmaps" element={<ChartsMaps />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
