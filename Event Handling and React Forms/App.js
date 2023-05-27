import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [headingText, setHeading] = useState("");
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  //CHANGE COLOUR OF BUTTON WHEN HOVERING OVER
  //Set it to false as your mouse won't be hovering over the button when first loading your site
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
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

        <button
          className="submitButton"
          type="submit"
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          //If the isMouseOver is equal to true, then it'll change the colour to black. If not, the colour will be white.
          style={{ background: isHovered ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
