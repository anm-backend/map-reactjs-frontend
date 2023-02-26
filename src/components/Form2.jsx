import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Form2.css';
import Bg from './Bg.jsx';
import Left from './Left.jsx';
import './App.css';
import Form2_right from './Form2_right';

function Form2() {
  return (
    <div>
        <Bg/>
         <div class="cont">
                <Left/>
                <div class="center"></div>
                <Form2_right/>
           </div>
     
  </div>
  )
}

export default Form2