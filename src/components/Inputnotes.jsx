import React, { useState } from "react";
function Inputnotes(props) {
  const [chapter, setChapter] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setChapter((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    props.onAdd(chapter);
    setChapter({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form className="input-form">
        <input
          onChange={handleChange}
          name="title"
          value={chapter.title}
          type="text"
          placeholder="Chapter Name"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={chapter.content}
          rows="4"
          placeholder="Enter Content of Chapter"
        ></textarea>

        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default Inputnotes;
