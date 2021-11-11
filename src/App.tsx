import React from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import TopMenu from "./components/TopMenu/TopMenu";
import Partnership from "./pages/Partnership/Partnership";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <SideMenu />
      <Partnership />
    </div>
  );
}

export default App;
