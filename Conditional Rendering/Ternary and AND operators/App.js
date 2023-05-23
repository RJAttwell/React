import Login from "./components/Login";

var isLoggedIn = true;

// const currentTime = new Date().getHours();
// console.log(currentTime);

export default function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}

      {/* {currentTime > 12 && <h1>Why are you still working?</h1>} */}
      {/* Can use AND operator or Ternary operator */}
    </div>
  );
}
