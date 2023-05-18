import "./styles.css";
import Card from "./components/Card";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {/* Cannot add a className inside the Card component as it'll see it as a custom property */}
      <Avatar img="https://avatars.githubusercontent.com/u/48221630?v=4" />

      {contacts.map(createCard)}
      {/* The map function will loop through the array of contacts and for every item inside
      the array, it calls the createCard function and parses over each of the objects inside the array */}

      {/* <Card
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
      /> */}
    </div>
  );
}
