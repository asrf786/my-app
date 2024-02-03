import React from "react";

function Main(props) {
  return (
    <div>
      <article className="main-article">
        <h2>{props.name}</h2>
        <h3>{props.note}</h3>
      </article>
    </div>
  );
}

export default Main;
