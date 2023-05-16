import "./styles.css";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="Avatar-Img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      {/* Cannot add a className inside the Card component as it'll see it as a custom property */}
      <Card
        name="Chris Pratt"
        img="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-4-2-16474177983x2.jpg?impolicy=website&width=510&height=356"
        tel="+1 23 456 789"
        email="PrattPrattPratt@gmail.com"
      />
      <Card
        name="Jack Black"
        img="https://file1.closermag.fr/var/closermag/storage/images/bio-people/biographie-jack-black-112096/811354-1-fre-FR/Jack-Black.jpg?alias=exact1024x768_l"
        tel="+98 765 4321"
        email="Jables@gmail.com"
      />
      <input id="firstName" />
    </div>
  );
}
