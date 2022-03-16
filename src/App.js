import React, { useState } from "react";
import { SideNavBar } from "./Components/Navbar/SideNavBar/SideNavBar";
import TopnavBar from "./Components/Navbar/TopNavBar/TopnavBar";
import "./App.css";
import ParentContentContainer from "./Components/Container/ParentContentContainer";
import MobileViewNavBar from "./Components/Navbar/MobileNavBar/MobileViewNavBar";

function App() {
  const [numberOfContent, setNumberOfContent] = useState(
    window.innerWidth > 700 ? 5 : 4
  );

  const [deviceWidthForNavBar, setDeviceWidthForNavBar] = useState(
    window.innerWidth > 700 ? false : true
  );

  const [enableSideNavBar, setEnableSideNavBar] = useState(true);

  return (
    <>
      <div className="container">
        {deviceWidthForNavBar ? (
          <MobileViewNavBar
            enable={enableSideNavBar}
            setEnable={setEnableSideNavBar}
          />
        ) : (
          <TopnavBar />
        )}
        <div className="child-container">
          <SideNavBar enable={enableSideNavBar} />
          <ParentContentContainer numberOfContent={numberOfContent} />
        </div>
      </div>
    </>
  );
}

export default App;
