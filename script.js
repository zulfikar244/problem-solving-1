Abu Bakker Siddik Bipul
//? 1.Create a variable called carName, assign the value Volvo to it.

let carName = "volvo"

//? 2.On one single line, declare three variables with the following names and values:

let firstName = "John" , lastName = "Doe" , age = 35;

//? 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x =10;
let y = 5;
console.log(x*=y)

//? 4.Use comments to describe the correct data type of the following variables:

let length = 16; // data type: number
let lastName = "Johnson"; // data type: string

const x = {
  firstName: "John",
  lastName: "Doe"
}; // data type: object


//? 5.Execute the function named myFunction.


function myFunction() {
    alert("Hello World!");
  }
  myFunction() //execute


  //? 6.Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").


  // Create the object
let person = {
    name: "John",
    age: 50
  };

  // Access the object and show the alert
  alert(person.name + " is " + person.age);


  //? 7.1. The <button> element should do something when someone clicks on it. Try to fix it!

<button onclick="alert('what's up vai bros!')">Click me.</button>


//? 8.Array Related Question

1.
const cars = ["Volvo" , "Jeep" , "Mercedes"];

alert (cars.length); //alert : 3


2.
const Brand = ["Volvo" , "Jeep" , "Mercedes"];
Brand[0] = "Ford";
console.log(Brand)


//? 9.Math Related Problems

// Use the correct Math method to create a random number.

let randomNumber = Math.random();
console.log(randomNumber);


// Use the correct Math method to return the largest number of 10 and 20.

let largestNumber = Math.max(10, 20);
console.log(largestNumber); // largestNumber: 20


// Use the correct Math method to get the square root of 9.


let squareRoot = Math.sqrt(9);
console.log(squareRoot); // squareRoot: 3


//? 10.comparison operator related problems!

//Choose the correct comparison operator to alert true, when x is greater than y.

let x = 10;
let y = 5;

alert(x > y); // Alerts: true

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 20;


alert(age < 18 ? "Too young" : "Old enough");