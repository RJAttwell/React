import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //Render components conditionally 
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    //Receives previous note and uses it to add to existing note
    setNote((prevNote) => {
      return {
        ...prevNote,
        //New name and it's value
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    //Prevents entire reloading of the page
    event.preventDefault();

    //Parse the note back over to App.js
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
    {/* If the text area hasn't been expanded, then the title section will not show up */}
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Create a note..."
          //If isExpanded is true, the text area has 3 rows, if it is false, it's only 1 row
          rows={isExpanded ? 3 : 1}
        />

        {/* Only have the button zoom animation is the text area has been expanded */}
        <Zoom in={isExpanded}>
          <Fab className="formButton" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
