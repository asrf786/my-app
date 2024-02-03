import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return <h2 className="footer">Copyright &copy; {year}</h2>;
}
export default Footer;
