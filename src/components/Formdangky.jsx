import './Login.css'
import Nextro from './Nextro'
import React from 'react'

export default function Formdangky() {
  return (
    <form>
     <div id="padding">
        <div className='style1'>
        <Nextro/>
        </div>
        <p className="txt2">Sign up</p>
        <span>
            <input size="38" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Username"/> 
            <input size="38" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
            <input size="38" type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/> 
            <input type="checkbox"/> <label>Send me the Newsletter weekly.</label> 
            <button> Sign up</button>
            <p align="center"> Already have an account? <a href="#">Sign in</a></p> 
        </span>
    </div>
    </form>
  );
}
