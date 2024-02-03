import React from "react";
import { add, sub, multi, div } from "./Math";

function Calc() {
  return (
    <div>
      <h1>Addition : {add(1)}</h1>
      <h1>Subtraction : {sub(6, 3)}</h1>
      <h1>Multiplication : {multi(4, 5)}</h1>
      <h1>Division : {div(8, 2)}</h1>
    </div>
  );
}

export default Calc;
