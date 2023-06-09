import React from "react";
import Navb from "./components/Navb";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {

  return (
    <Provider store={store}>
      <div>
        <Navb />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );

}
export default App;