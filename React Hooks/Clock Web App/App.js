import "./styles.css";
import React, { useState, useEffect } from "react";

//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

export default function App() {
  //useState hook defines the time variable and the setTime function to update it
  const [time, setTime] = useState(new Date());

  //useEffect hook which begins the interval timer and updates the time state every second.
  //useEffect allows you to perform side effects in function components.
  //Side effects are actions that affect the outside world (E.g: Manipulating DOM, Fetching data from API, starting timers)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //clearInterval cancels the interval timer.
    return () => clearInterval(timer);
  }, []);

  //By putting an empty array, we are telling React to only run the effect once when the component is inititally
  //rendered. Means it won't be repeated on re-renders.

  return (
    <div className="App">
      {/* Displays what timezone the current time is */}
      <h3>UTC +0 - United Kingdom, Ireland</h3>
      <h1>{time.toLocaleTimeString()}</h1>
      {/* Button updates the time when it's clicked */}
      <button onClick={() => setTime(new Date())}>Get Time</button>
    </div>
  );
}
