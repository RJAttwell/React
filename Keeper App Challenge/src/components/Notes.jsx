import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {

  function handleClick(){
    //Triggers function in App.js
    props.onDelete(props.id);
  }

  return (
    <div className="notesDiv">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button style={{backgroundColor: "transparent"}} className="noteButton" onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Notes;
