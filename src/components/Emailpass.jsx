import './App.css'
import Email from './Email'
import React from 'react'
import Password from './Password'
import Checkbox from './Checkbox'
import Buttonsubmit from './Buttonsubmit'

function Emailpass() {
  return (
    <div className="duoi-1">
            <label className="pad">Email address</label> <br />
            <Email/>
            <span className="pad style8">
              We'll never share your email with anyone else.
            </span>
            <br />
            <label className="pad">Password</label> <br />
            <Password/>
            <br /> &nbsp;&nbsp;
            <Checkbox/>
            <label>Check me out</label>
            <br /> &nbsp;&nbsp;
            <Buttonsubmit/>
          </div>
  )
}

export default Emailpass