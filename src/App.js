// import logo from './logo.svg';
// import './App2.css';

import React, { useState } from "react"

import Navbar from "./MyComponents/Navbar"
import TextForm from "./MyComponents/TextForm"
import Alert from "./MyComponents/Alert"
import About from "./MyComponents/About"



// let name = "Harry";
function App() {
  //Creating the states
  const [mode, setMode] = useState('light');

  // alert state for creating the alert msg for iterate with dom
  const [alert, setAlert] = useState('success');

  //Define the Functions
  //Func- Togglemode the dark mode
  const toggleMode = () => {
    if (mode == 'light') {
      document.title = 'Textutils Dark mode';
      document.body.style.background = 'black';
      setMode('dark');
      setAlert('Dark mode has been enable', 'success');
    }
    else {
      document.title = 'Textutils light mode';
      document.body.style.background = 'white';
      setMode('light');
      setAlert('Light mode has been enable', 'success');

    }
  }
  //Func-set the alert and what the toggled
  const showAlert = (alertMessage, type) => {
    setAlert({
      msg: alertMessage,
      type: type
    });
  }

  return (
    <>
      

        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert= "This is alert"/> */}
        <Alert alert={alert} />

        {/* inserted the switeches  */}
        <div className="container my-2">

         <TextForm heading="Enter the text for analyze" mode={mode} showAlert={showAlert} />
        

        </div>
     

    </>
  );
}

export default App;
