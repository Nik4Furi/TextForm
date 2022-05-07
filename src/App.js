// import logo from './logo.svg';
// import './App2.css';

import { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";

// let name = "Harry";
function App() {
  const[mode, setMode] = useState('light');
  //define the functions
  const toggleMode = ()=>{
    if (mode == 'light') {
      document.body.style.background = 'black';
      setMode('dark');
    }
    else{
      document.body.style.background = 'white';
      setMode('light');
    }
  }
  return (
    <>
  
<Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode = {toggleMode}/>
 {/* /* <Navbar  /> */}
 <div className="container">
 <TextForm heading="Enter the text for analyze" mode={mode}/>
 </div>
    </>
  );
}

export default App;
