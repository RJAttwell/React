import "./styles.css";
// Import multiple items
import pi, { doublePi, triplePi } from "./math";

// import * as pi from "./math";
// This method means that instead of pi in the list, you'd put {pi.default}
//For the others, you'd put pi.doublePi() and pi.triplePi();

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>

        {/* Since they are functions, you must add () to double and triple Pi */}
      </ul>
    </div>
  );
}
