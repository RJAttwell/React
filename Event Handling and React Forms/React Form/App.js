import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
    //Stops the default behaviour (refresh)
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input
          //When your input element triggers the function stored in onChange, it also parses over an object
          //The object corresponds to the event that triggered the onChange
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          //Have to make the value of our input as the value that comes from our state
          value={name}
        />

        <button className="submitButton" type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
