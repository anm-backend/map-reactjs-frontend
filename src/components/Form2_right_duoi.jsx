import React from 'react'
import './Form2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Box1 from './Box1';
import Box2 from './Box2';

function Form2_right_duoi() {
  return (
    <>
      <div className="box12">
          <Box1/>
          <div className="center"></div>
          <Box1/>
      </div> <br/>
      <div className="box12">
        <Box1/>
        <div className="center"></div>
        <Box2/>
     </div>
     </>
  )
}

export default Form2_right_duoi;