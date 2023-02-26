import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Bg from './Bg.jsx';
import Left from './Left.jsx';
import './App.css';
import Form3_right from './Form3_right.jsx';


export default function Form3() {
  return (
    <div>
        <Bg/>
         <div class="cont">
                <Left/>
                <div class="center"></div>
                <Form3_right/>
           </div>
    </div>
  )
}

