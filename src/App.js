import React from "react";
import Info from "./Components/info";
import Center from './Components/pageCenter';
import Footer from "./Components/Footer";
import './App.css'
function App() {
  return (
      <div className='mainContainer'>
          <Info/>
          <Center/>
          <Footer/>
      </div>
  );
}

export default App;
