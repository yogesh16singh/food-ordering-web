import React from "react";
import Navb from "./components/Navb";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <div>
      <Navb />
      <Outlet />
      <Footer />
    </div>
  );

}
export default App;