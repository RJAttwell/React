import "./styles.css";
import React, { useState } from "react";

export default function App() {
  //Two items, a name and a function
  const [count, setCount] = useState(0);

  // const rgb = [46, 204, 113];
  //Destructure this array with this method:
  // const [red, green, blue] = [46, 204, 113];
  //Each name is assigned to a value in the array
  // console.log(green);

  function increase() {
    //count++;
    //console.log(count);
    setCount(count + 1);
  }

  function decrease() {
    //count++;
    //console.log(count);
    setCount(count - 1);
  }

  return (
    <div className="App">
      {/* //Telling H1 to keep track of the value of our state */}
      {/* When the state updates, it re-renders the H1 */}
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
