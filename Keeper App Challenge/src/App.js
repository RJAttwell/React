import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import notes from "./notes";
import InputArea from "./components/InputArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      //Loop through the prevNotes array with the filter function
      //Filter function accepts up to 3 arguments.
      return prevNotes.filter((noteItem, index) => {
        //Return all the notes where the index does not equal the ID of the note that needs to be deleted
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />

      <InputArea onAdd={addNote} />

      <div className="notesSection">
        {notes.map((noteItem, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteItem}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
