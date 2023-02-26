import React from 'react'
import './App.css';
import Avatar from './Avatar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ablepro from './Ablepro.jsx';
import UxDesigner from './UxDesigner.jsx';
import Dashboard from './Dashboard';
import Pagelayout from './Pagelayout';
import Basic from './Basic';
import Form from './Form';
import Bootstraptable from './Bootstraptable';
import Chart from './Chart';
import Maps from './Maps';

export default function Left() {
  return (
    <div className="left">
             <br/>
             <Ablepro/>
             <div className="box">
                    <br/>
                    <center>
                        <Avatar/>
                    </center>
                    <br/>
                        <UxDesigner/>
                    <p className="text">Navigation</p>
                        <Dashboard/>
                        <Pagelayout/>
                    <p className="text">UI Element</p>
                        <Basic/>
                    <p className="text"> Forms & Table</p>
                        <Form/>
                        <Bootstraptable/>
                    <p className="text"> Chart & Maps</p>
                        <Chart/>
                        <Maps/>
             </div>
     </div>
  );
}
