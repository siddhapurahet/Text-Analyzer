//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, {useState} from 'react';

function App() {
  return (
    <>
     <Navbar title =  "TEXTPARAMS"/>
     <div className="container my-3"></div>
     <Textform heading="Enter text to analyze"/>
    </>
  );
}

export default App;
