import React from "react";

function DisplayNotes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <article className="main-article">
      <h2>{props.title}</h2>
      <h3>{props.content}</h3>
      <button onClick={handleClick}>Delete</button>
    </article>
  );
}

export default DisplayNotes;
