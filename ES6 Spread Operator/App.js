import "./styles.css";
import React, { useState } from "react";

const citrus = ["Lime", "Lemon", "Orange"];
//ES6 Spread Operator to add the citrus array to the fruits array
//Can also change position and have it wherever you want it to be in the array
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

console.log(fruits);

const fullName = {
fName: "James",
lName: "Bond"
};

const user = {
...fullName,
id: 1,
username: "jamesbond007"
};

console.log(user);

export default function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="App">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
