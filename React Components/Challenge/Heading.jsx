function Heading() {
  //Get the time of the day
  const date = new Date();
  const time = date.getHours();
  let greeting = "";

  //Create a variable for the color
  const colorStyle = {
    color: ""
  };

  if (time <= 12) {
    greeting = "Good Morning!";
    colorStyle.color = "red";
  } else if (time > 12 && time < 18) {
    greeting = "Good Afternoon!";
    colorStyle.color = "green";
  } else if (time > 18 && time < 24) {
    greeting = "Good Evening!";
    colorStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={colorStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
