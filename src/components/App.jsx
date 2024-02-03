import React from "react";
import Heading from "./Heading";
import Footer from "./Footer.jsx";
import Main from "./Main";
import notes from "./Notes";

function App() {
  return (
    <div className="main-container">
      <Heading />
      <div className="main">
        {notes.map((note) => (
          <Main key={note.key} name={note.title} note={note.noteTaken} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
