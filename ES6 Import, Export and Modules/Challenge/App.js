import "./styles.css";
import { add, multiply, subtract, divide } from "./calculator";

//Create functions for add, multiply, subtract and divide in the calculator.js file
//Import the functions from the calculator.js file

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </div>
  );
}
