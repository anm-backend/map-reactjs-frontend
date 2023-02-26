
import React from 'react'
import './App.css';
import Right from './Right.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bg from './Bg.jsx';
import Left from './Left.jsx';

export default function Body() {
  return (
    <div>
        <Bg/>
         <div class="cont">
                <Left/>
                <div class="center"></div>
                <Right></Right>
           </div>
     
  </div>
  );
}
