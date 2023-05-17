import "./styles.css";
import Card from "./components/Card";
import contacts from "./contacts";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {/* Cannot add a className inside the Card component as it'll see it as a custom property */}
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />
    </div>
  );
}
