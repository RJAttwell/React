import "./styles.css";
import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// const [headingText, setHeading] = useState("");

export default function App() {
  const [itemText, setItemText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    if (itemText !== "") {
      setItemList((prevItems) => [...prevItems, itemText]);
    }
    
    setItemText("");

  }

  function handleChange(event) {
    setItemText(event.target.value);
  }

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={itemText}
          onChange={handleChange}
          placeholder="Add a task"
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
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul className="myUl">
          {/* In the ul element, we use the map function to iterate over the itemList and render each item as an li element */}
          {itemList.map((item, index) => (
            //Assign a unique ID to each item by using the index of the item in the array
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
