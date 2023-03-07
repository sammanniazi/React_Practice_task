import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';



const Routing = () => {
  return (
 
    <div className="App">
      
        <Routes>
          
        <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />

        </Routes>


    </div>

  );
};

export default Routing;
