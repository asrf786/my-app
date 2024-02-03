// import React from "react";
import { randomNumber } from "./Heading";

function add(n1) {
  return randomNumber + n1;
}
function sub(n1, n2) {
  return n1 - n2;
}
function multi(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}

export { add, sub, multi, div };
