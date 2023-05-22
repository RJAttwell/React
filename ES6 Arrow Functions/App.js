var numbers = [3, 45, 28, 5, 12];

//Arrow functions
//If you have only one input, you can get rid of the parenthesis
//If you have multiple parameters, you need the parenthesis

//If you have just a single line statement, you can get rid of the curly braces and the return keyword
const newNumbers = numbers.map( x =>  x * x);
console.log(newNumbers);

//Map:
const newNumbers = numbers.map( x => x * 2);
console.log(newNumbers);

// Filter:
const newNumbers = numbers.filter( num => num > 10);
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array
var newNumber = numbers.reduce((accumulater, currentNumber) => {
  console.log("accumulator = " + accumulater);
  console.log("currentNumber = " + currentNumber)
  return accumulater + currentNumber;
});
console.log(newNumber);
