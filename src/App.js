//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, {useState} from 'react';
//import {About} from "./About.js";
//import Textform from './Components/Textform';

{/*import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";*/}


function App() {

  //const[alert, setalert] = useState(null);

  //const showalert =(message, type)=>{
    //setalert({
     // msg: message,
    //  type: type
    //})

    //const showmsg = ()=>{
    //  if(alert === ''){
    //    showalert("Dark mode is also available");
     // }
     // else{
     //   showalert("Light mode is also available");
      //}
    //}/*}

  //}
  return (
    <>
    {/*<Router>
    <Navbar title =  "Textutils..."/>
    {/*<Alert alert={alert}/>*/}
    {/*<div className="container my-3">

    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/users">
        <users/>
      </Route>
      <Route path="/">
        <Textform heading="Enter text to analyze"/>
      </Route>
    </Switch>
    {/*<About/>
    </div>
    </Router>*/}
     <Navbar title =  "Textutils..."/>
     <div className="container my-3"></div>
     <Textform heading="Enter text to analyze"/>
     
    </>
  );
}

export default App;
