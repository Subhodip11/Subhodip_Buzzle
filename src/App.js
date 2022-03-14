import React, { useState } from "react";
import { SideNavBar } from "./Components/Navbar/SideNavBar/SideNavBar";
import TopnavBar from "./Components/Navbar/TopNavBar/TopnavBar";
import "./App.css";
import ParentContentContainer from "./Components/Container/ParentContentContainer";

function App() {
  const [enable, setEnable] = useState(true);
  return (
    <>
      <div className="container">
        <TopnavBar enable={enable} setEnable={setEnable} />
        <div className="child-container">
          <SideNavBar enable={enable} />
          <ParentContentContainer />
        </div>
      </div>
    </>
  );
}

export default App;
