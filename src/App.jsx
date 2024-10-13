import React, { useContext } from "react";
import Images from "./components/Images";
import PixabayContext from "./context/PixabayContext";
import Navbar from "./components/Navbar";
const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Images/>
    </div>
  );
};

export default App;
