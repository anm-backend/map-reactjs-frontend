import React from 'react'
import bg from '../asserts/bg.jpg';  
import '../components/App.css';

export default function Bg() {
  return (
    <div>
        <img className="bg" src={bg} alt="background"/>
    </div>
  );
}
