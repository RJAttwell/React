import cars from "./practice";
import "./styles.css";
import animals, { useAnimals } from "./data";

const [cat, dog] = animals;

//Similar to useState
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//The variable names inside the object have to be the same as the names in the data.js file
//Or you can update the names inside the object. Can be useful if you're getting data from a public API
const { name, sound } = cat;

//Could also give the variables a custom value:
const {name="Fella", sound="Sup homie"} = cat

//If you have a nested object
const{name, sound, feedingRequirements: {food, water}} = cat;
console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

//Re-name the values to match the names in the table below
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

export default function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}
