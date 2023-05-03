import "./styles.css";
import Function from "./components/Function";

// Create a React App
// Show single h1 that says good morning if between midnight and 12PM
// Good afternoon if between 12PM and 6PM (18:00PM)
// Good evening if between 6PM and Midnight (00:00AM)

export default function App() {
  return (
    <div className="App">
      <Function />
    </div>
  );
}
