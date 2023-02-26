import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import Formcomponents from "./Formcomponents";
import Tren from "./Tren";
import Duoi from "./Duoi";

export default function Right() {
  return (
    <div className="right">
      <br />
      <Table/>
      <p className="style6">Form Elements</p>
      <Formcomponents/>
      <Tren/>
      <br />
      <Duoi/>
    </div>
  );
}
