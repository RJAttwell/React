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
  const [tokyoTime, setTokyoTime] = useState("");
  const [laTime, setLATime] = useState("");

  //useEffect hook which begins the interval timer and updates the time state every second.
  //useEffect allows you to perform side effects in function components.
  //Side effects are actions that affect the outside world (E.g: Manipulating DOM, Fetching data from API, starting timers)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const tokyoTimer = setInterval(() => {
      const tokyo = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo"
      });
      setTokyoTime(new Date(tokyo));
    }, 1000);

    const laTimer = setInterval(() => {
      const LA = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      });
      setLATime(new Date(LA));
    }, 1000);

    //clearInterval cancels the interval timer.
    return () => {
      clearInterval(timer);
      clearInterval(tokyoTimer);
      clearInterval(laTimer);
    };
  }, []);

  //By putting an empty array, we are telling React to only run the effect once when the component is inititally
  //rendered. Means it won't be repeated on re-renders.

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="App">
      <h2>{date}</h2>

      {/* Displays what timezone the current time is */}
      <h3>GMT +0 - United Kingdom, Ireland</h3>
      <h1>{time.toLocaleTimeString()}</h1>

      <h3>GMT +9 - Japan, South Korea</h3>
      <h1>{tokyoTime && tokyoTime.toLocaleTimeString()}</h1>

      <h3>GMT -7 - Los Angelas</h3>
      <h1>{laTime && laTime.toLocaleTimeString()}</h1>

      {/* Button updates the time when it's clicked */}
      <button onClick={() => setTime(new Date())}>Get Time</button>
    </div>
  );
}
