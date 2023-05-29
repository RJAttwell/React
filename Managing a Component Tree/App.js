import "./styles.css";
import React, { useState } from "react";
import ListItem from "./components/ListItem";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    if (itemText !== "") {
      setItemList((prevItems) => [...prevItems, itemText]);
      setItemText("");
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

  function deleteItem(id) {
    setItemList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
            <ListItem
              key={index}
              id={index}
              item={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
