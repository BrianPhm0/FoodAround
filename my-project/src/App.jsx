import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/organisms/nav_bar/NavBarHeader";
import Sidebar from "./components/organisms/sidebar/SideBar";
import ContentArea from "./components/organisms/contentarea/ContentArea";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex px-10 py-[80px] gap-2">
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
