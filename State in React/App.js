import "./styles.css";

var isDone = true;
const strikeThrough = { textDecoration: "line-through" };

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

export default function App() {
  return (
    <div className="App">
      {/* Declarative Programming  */}
      {/* UI that is dependent on the value of a state variable */}
      <p style={isDone ? strikeThrough : null}>Buy Choccy Milk</p> 

      {/* Imperative Programming */}
      {/* Getting hold of an item and setting it's value */}
      <p>Hello</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Remove strike through</button>
    </div>
  );
}
