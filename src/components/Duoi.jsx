import './App.css'
import Emailpass from './Emailpass'
import Textexample from './Textexample'


import React from 'react'

function Duoi() {
  return (
    <div className="duoi">
        <div className="pad">
          <br /> Basic Component <hr />
        </div>
        <div className="pad">
          <br /> Form controls <hr />
        </div>
        <div className="duoi-dis">
          <Emailpass/>
          <Textexample/>
        </div>
      </div>
  )
}

export default Duoi