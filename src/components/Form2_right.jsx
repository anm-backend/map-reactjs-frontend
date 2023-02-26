import Table from "./Table";
import Formcomponents from "./Formcomponents";
import "./App.css";
import './Form2.css';
import React from 'react'
import Form2_right_duoi from "./Form2_right_duoi";

export default function Form2_right() {
  return (
    <div className="right">
      <br />
      <Table/>
      <p className="style6">Form Elements</p>
      <Formcomponents/>
      <Form2_right_duoi/>
    </div>
  )
}

