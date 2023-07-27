// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import contactsStore from "./pages/contactsStore";
// import ChartsMaps from "./pages/ChartsMaps";
// import { useDispatch, useSelector } from "react-redux";
// // import {state} from "./redux/actionReducer"
// function App() {
//   const store = useSelector((state) => state);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <div style={{display:"flex",flexDirection:"row"}}>
//           <div>{/* <Sidebar/> */}</div>
//           <div>
//             <Routes>
//               <Route path="/" element={<contactsStore />} />
//               <Route path="/chartsmaps" element={<ChartsMaps />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// ______________________________________
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";


function App(): JSX.Element {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
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
