import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Inputnotes from "./Inputnotes";
import DisplayNotes from "./DisplayNotes";

function App() {
  const [book, setBook] = useState([]);

  function addChapter(newChapter) {
    setBook((prevChapters) => {
      return [...prevChapters, newChapter];
    });
  }

  function deleteChapter(id) {
    setBook((prevChapters) => {
      return prevChapters.filter((chapterNumber, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="main-container">
      <Heading />
      <Inputnotes onAdd={addChapter} />
      <div className="main">
        {book.map((chapterNumber, index) => {
          return (
            <DisplayNotes
              key={index}
              id={index}
              title={chapterNumber.title}
              content={chapterNumber.content}
              onDelete={deleteChapter}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";
// import Heading from "./Heading";
// import Footer from "./Footer.jsx";
// import Main from "./Main";
// import notes from "./Notes";

// function App() {
//   return (
//     <div className="main-container">
//       <Heading />
//       <div className="main">
//         {notes.map((note) => (
//           <Main key={note.key} name={note.title} note={note.noteTaken} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default App;
