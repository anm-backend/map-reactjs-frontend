import "./App.css";
import Inputemail from "./Inputemail";
import React from "react";
import Inputusername from "./Inputusername";
import Inputpassword from "./Inputpassword";


function Tren() {
  return (
    <div className="tren">
      <div className="pad">
        <br /> Basic Component <br />
        <hr />
      </div>
      <div className="tren-dis">
        <Inputemail/>
        &nbsp;
        <Inputusername/>
        <Inputpassword/>
      </div>
    </div>
  );
}

export default Tren;
