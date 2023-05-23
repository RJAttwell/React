import "./styles.css";
import Form from "./components/Form";

//Form will change if you change this to false
var userIsRegistered = true;

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form isRegistered={userIsRegistered} />
      </div>
    </div>
  );
}
