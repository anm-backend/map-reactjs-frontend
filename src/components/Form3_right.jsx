import Table from "./Table";
import Formcomponents from "./Formcomponents.jsx";
import React from 'react'
import Form3_right_duoi from "./Form3_right_duoi";
import './App.css';

function Form3_right() {
  return (
    <div className="right">
      <br />
      <Table/>
      <p className="style6">Form Elements</p>
      <Formcomponents/>
      <Form3_right_duoi/>
    </div>
  )
}

export default Form3_right