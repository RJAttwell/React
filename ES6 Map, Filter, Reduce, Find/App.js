import emojipedia from "./emojipedia";
import "./styles.css";

var numbers = [3, 56, 2, 48, 5];

//Map - Create a new array by doing something with each item in an array

function double(x){
  return x * 2;
};

// //Returns double the value of each item inside the numbers array
const newNumbers = numbers.map(double);
console.log(newNumbers);

//ForEach Method:
var newNumbers = [];

numbers.forEach(function (x){
  newNumbers.push(x * 2);
});

console.log(newNumbers);

//Map is a lot more concise, can place the function inside the map function:
//The map function itself returns an output. Don't have to create a new empty array.
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true
//Return certain items that fulfil a criteria that we set
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(newNumbers);

//This is superior than the forEach method:
var newNumbers = [];
numbers.forEach(function(num){
  if(num > 10){
    newNumbers.push(num);
  }
});

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array

var newNumber = numbers.reduce(function(accumulater, currentNumber){
  console.log("accumulator = " + accumulater);
  console.log("currentNumber = " + currentNumber)
  return accumulater + currentNumber;
});

console.log(newNumber);

// Find - find the first item that matches from an array

const newNumber = numbers.find(function(num){
  return num > 10;
});

console.log(newNumber);

//findIndex - Same as find but returns the index of that item

const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumber);

//Challenge:
//Make new array with just the descriptions from the emojipedia array in the emojipedia JS file
//Truncate the text as well
const justMeaning = emojipedia.map(function (description) {
  return description.meaning.substring(0, 100);
});

console.log(justMeaning);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
