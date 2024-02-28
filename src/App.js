import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

import Design from "./Components/Design";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState("Hi");
  const [heading, setHeading] = useState("Enter Your Text Here");
  const showHeading = () => {
    if (mode === "dark") {
      setHeading("white");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "My App- Light Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#113852";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "My App-Dark Mode";
    }
  };
  return (
    <>
     
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        

        <Alert alert={alert}></Alert>
        
        <Design></Design>
          
          <TextForm showAlert={showAlert} heading={heading} mode={mode} />
         
        {<div className="container my-4"></div>}
     
      <About />
    </>
  );
}

export default App;
