'use strict';

///////////////////////////////// A Closer Look at Functions ////////////////////////////////////

///////////////////////////////// Default Parameters ////////////////////////////////////
/*
//Useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default

//Create a basic booking function

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers //We can use the values of the other parameters defined BEFORE this parameter eg default price based on numPassengers
) {
  //ES6 - NEW way of setting default values to function parameters

  //OLD WAY - ES5 uses short circuiting as a way of setting default values to function parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  //Use this data to create an object and push this data into bookings array
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //Result: {flightNum: 'LH123', numPassengers: 1, price: 199}
//Overrides the default values we set in the parameters
createBooking('LH123', 2, 800); //Result: {flightNum: 'LH123', numPassengers: 2, price: 800}
//price calculated based on the numPassengers passed in
createBooking('LH123', 2); //Result: {flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5); //Result: {flightNum: 'LH123', numPassengers: 5, price: 995}

//We cannot skip arguments when we call the function, aguments will always be mapped to parameters
//Rather than skip the argument, we can set them to undefined if we want to leave a parameter at its default value
createBooking('LH123', undefined, 1000);

*/

///////////////////////////////// How Passing Arguments Works: Values vs. Reference ////////////////////////////////////
/*

//How primitives and objects work in the context of functions

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247368922,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 247368922) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

//checkIn(flight, jonas);

// console.log(flight); //Result: LH234
//flight is a primitive type, a string, flightNum in the function is basically A COPY of the original value. same as
// const flightNum = flight;

// console.log(jonas); //Result: {name: 'Mr. Jonas Schmedtmann', passport: 247368922}
//'jonas' is an object, which is a reference type.
//When we pass a reference type into a function, what is copied is a reference to the object in the memory heap e.g.
// const passenger = jonas;

//With an object, we are only copying the reference to the object in the memory heap, not the object itself. Manipulating the 'passenger' object is exactly the same as manipulating the 'jonas' object. They are both the same object in the memory heap.

//What we change in the copy of an object will also change in the original object.

//NOTE: Te fact that objects behave this way when passed into function can have unforeseeable consequences in large codebases, especially true when working with other developers.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas); //Result: manipulated jonas.passport with a new passport number
checkIn(flight, jonas); //Result: alert: Wrong Passport because the passport number no longer matches

//////Passing by value and Passing by reference/////

//JS ONLY has passing by value, NOT passing by reference, even if it looks like it is passing by reference//

//There are languages, like C++, where you can pass a reference to any value instead of the value itself. This works with primitives. eg can pass a reference to the value 5 and the original value outside of the function would be changed.  JS DOES NOT do this. In JS we pass a reference to the function

*/

///////////////////////////////// First Class and Higher Order Functions ////////////////////////////////////
/*

//JS treats functions as first-class citizens
//Functions are treated as values
//Functions are just another TYPE of OBJECT

//We can store functions in variables or as properties
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

//We can pass functions as arguments to other functions
//We can return functions FROM functions

//We can call methods on functions. There are methods we can call on functions e.g. .bind(method)
counter.inc.bind(someOtherObject);

//Higher Order Functions: A function that RECEIVES another function as an argument, that RETURNS a new function, or both.
const greet = () => console.log('Hey Jonas');
btnClose.addeventListener('click', greet); //Higher order function because it receives a function as an input (callback function), e.g. the event listener takes in the greet function as an input

//Function that returns a new function
function count() {
  //Higher order function
  let counter = 0;
  return function () {
    //Returned function
    counter++;
  };
}

//First Class functions are a feature or concept that a programming language has or does not have. ALL functions are values. There are no First Class functions in practice. First Class functions is just a concept.

//There are Higher Order functions in practice because the language supports first class functions.

*/

///////////////////////////////// Functions Accepting Callback Functions ////////////////////////////////////
/*
//Create a function that accepts other functions as an input/parameter/argument

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function because it takes in a function as a parameter
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//We want JS to transform the string using the upperFirstWord function
transformer('JavaScript is the best!', upperFirstWord); //We only pass in the function value, not calling it. We call the function inside the higher order function

//We want JS to transform the string using the oneWord function
transformer('JavaScript is the best!', oneWord);
//Calling the transformer function and into that function we are passing the callback function. Callback because we are not calling them, we are telling JS to call them later. The transformer function will call the callback functions

//JS USES CALLBACKS ALL THE TIME
const highFive = function () {
  console.log('🙌🏽');
};

//Event listener is the HIGHER ORDER function
document.body.addEventListener('click', highFive); //highFive is the CALLBACK function
//The highFive callback function tells the event listener EXACTLY what to do

['Jonas', 'Martha', 'Adam'].forEach(highFive); //for each element of the array, the callback function will be called

//Why are callback functions used in JS?
//Why are callback functions so helpful in JS?

//Makes it easy to split up code into more reusable and interconnected parts
////IMPORTANT: Callback function allow us to create abstraction!!!////
//Abstraction means that we hide the details of code implementation because we don't care about all the details. Allows us to think of our problems at a higher/more abstract level

//The transformer function doesn't care HOW the string is transformed. It transforms a string but doesn't care HOW it should transform the string. We created a new level of abstraction. Delegating string transformation to the other lower level functions.
*/

///////////////////////////////// Functions Returning Functions ////////////////////////////////////
/*
//Create a function that returns a new function

const greet = function (greeting) {
  //function greet returns a new function that we stored into a variable
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //This variable is a function that we can call
greeterHey('Jonas'); //same as: greet('Hey')('Jonas')
greeterHey('Steven'); //same as: greet('Hey')('Steven')

//The above is the same as calling the function like this:
greet('Hello')('Jonas');

//Why have functions return other functions? Functional Programming

//Practice: Rewrite the function as an arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`); //One arrow function returning another arrow function

greetArr('Hi')('Jonas');
*/

///////////////////////////////// call and apply Methods  ////////////////////////////////////
/*
//Setting the this.keyword manually

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Due to the concept of First Class Functions, we can take the function from the lufthansa object and store it into a new variable: book
const book = lufthansa.book;
console.log(book);

//book(23, 'Sarah Williams'); result WILL NOT WORK
//The above results in an error because this book function is no longer the method from the lufthansa object. It's now a separate function, it's a copy. It's not a method anymore, it's now a function. We can't call this.method on regular function. The this.keyword points the global object and it is undefined. This keyword depends on HOW the function is called

//call, apply, and bind function methods
//A function is just an object. An object can have methods. Functions can have methods, too.

//Function method #1 - The .call(method): the first argument is exactly what we want the this.keyword to point to, the following arguments are those from the method being called
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

//We did not call the book function, we called the .call(method), and the .call(method) called the book function with the this.keyword set to eurowings

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 529, 'Mary Cooper');
console.log(swiss);

//Function method #2 - The .apply(method): same as call method but instead it takes in an array of arguments after the first argument. Not used in modern JS.

const flightData = [584, 'George Cooper'];
book.apply(swiss, flightData); //First argument = this keyword, Second Argument needs to be an array of data
console.log(swiss);

//BUT Instead of using apply, we can use call and the spread operator to destructure the array and take the data into the method
book.call(swiss, ...flightData);
console.log(swiss);
*/

///////////////////////////////// The bind Method  ////////////////////////////////////
/*

//Function method #3 - The .bind(method): Just like call, it also allows us to manually set the this.keyword for any function call. BUT the .bind(method) DOES NOT immediatly call the function, INSTEAD it RETURNS a NEW function to where the this.keyword is bound. It's set to whatever value we pass into .bind(method)

//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(372, 'Steven Williams');

//We can pass in multiple arguments into .bind(method)
const bookEW23 = book.bind(eurowings, 23); //We preset the flightNum argument
//When we call the function, we now only need the passenger name
bookEW23('Jonas Schmedtmann'); //Result: Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Michelle Smith'); //Result: Michelle Smith booked a seat on Eurowings flight EW23
//Allows us to set in stone certain arguments into a function.

//Specifying parts of the argument is called Partial Application
//Partial Application: a part of the argument of the original function is already applied, already set

//Objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application usecase
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//same as writing: addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//Create a function that can return a function


//MY SOLVE - I did it all backwards
// const addVATFunc = function (value) {
//   return function (rate) {
//     return value + value * rate;
//   };
// };

// console.log(addVATFunc(200)(0.1));


const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/

///////////////////////////////// Immediately Invoked Function Expressions (IIFE)  ////////////////////////////////////
/*
//Sometimes we need a function that is executed one and then never again
//A function that disappears after it's called once

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

//How to create and execute a function immediately and not save it

//Immediately Invoked Function Expressions - a pattern some developers came up with

//Write a function expression and do not assign it to any variable
//Wrap the entire function in parentheses and then call it using the parentheses
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})(); //calling the function here

(() => console.log(`This will ALSO never run again`))();

//functions create scopes
//One scope does not have access to variables from an inner scope
//The global scope does not have access to the variables defined inside either of these functions

//console.log(isPrivate); //not accessible by the global scope
//All data defined inside a scope is private and encapsulated inside the scope

//Data encapsulation and data privacy are extremely important concepts in programming.
//We need to protect our variables from being accidentally overwritten by other parts of the program or with external scripts or libraries
//Important to hide variables and scopes are a good tool to hide variables

//Variables declared with let or const create their own scope inside a block

{
  const isPrivate = 23;
  var notPrivate = 46;
}

//console.log(isPrivate);// not defined because it is not accessible
console.log(notPrivate); //var is accessible by the global scope

//IIFE is not used as frequently in modern JS because of scoping, we can just declare variables inside a scope) but there are some use cases
*/

///////////////////////////////// Closures  ////////////////////////////////////

//Closures bring the callstack, execution context, and scope chain all together

//Closure is not a feature we explicitly use. We don't create them manually like a new array or function. It happens automatically in certain situations.

const secureBooking = function () {
  let passengerCount = 0; //this variable cannot be manipulated from outside this function

  return function () {
    //secureBooking function will return a function that will update the passengerCount variable
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }; //this inner function IS the booker function
};

//Here we call secureBooking function. secureBooking will also call the return function and store the result to a variable called booker. The variable booker will now become a function as well, the return function inside secureBooking
const booker = secureBooking();
//booker is located in the global scope

//Since booker is the return function, we can call it

//Here we call the function and it executes. The passengerCount updated to 1, the message is logged to the console, the execution context is popped off the callstack, and the execution is moved to the next line
booker(); //result: 1 passengers

//We call the function again, we get a new execution context and it is pushed into the call stack. The closure is still there and attached to the function and the value is still 1. This function executes, increases the passengerCount to 2, logs the message, the execution context is popped off the callstack, and the execution is moved to the next line.
booker(); //result: 2 passengers

//We call the function a third time, we get a new execution context and it is pushed into the call stack. The closure is still there and attached to the function and the value is now 2. This function executes, increases the passengerCount to 3, logs the message, the execution context is popped off the callstack, and the execution is moved to the next line.
booker(); //result: 3 passengers

//A CLOSURE makes a function remember all the variables that existed at the functions birthplace(origin)

////IMPORTANT NOTE!!!
//A function always has access to the variable environment of the execution context in which the function was created. EVEN AFTER that execution context is gone i.e. popped off the call stack.

//In this case, the booker function, or the return function we assigned to the variable booker, was created in the execution context of secureBooking. booker has access to the variable environment of secureBooking. It has access to the passengerCount variable.

//booker function has access to the passengerCount variable becuase it's defined in the scope in which the booker function was ACTUALLY created. booker was ACTUALLY created inside the secureBooking function as a return function. The scope chain is preserved through the closure, even when the scope has already been destroyed because its execution is garbage collected. This means that even though the EC has been destroyed, the variable environment still exists somewhere in the engine.

//Closure is the variable environment attached to the function exactly as is was at the time and place the function was created

//We can say the booker function closed over its parent scope, or its parent variable environment, including all function arguments. This closed over variable environment stays with the function forever. It will carry it around to use it.

//Thanks to closure, a function does not lose connection to variables that existed at the function's birthplace/origin.

//Closure has priority over the scope chain! If there was a global passengerCount variable set to 10, JS would still first use the passenger count variable in the closure.

console.dir(booker);

//A function (person🚶🏽‍♂️) => has a connection to (linked 🔗) => the parent scope (parent's home 🏡) => and it's variables (objects inside parent's home 🗒)

//A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

//A function (person🚶🏽‍♂️) => has a backpack (closure 🎒) => with the variables (the objects 🗒) that were present in the environment where the function was created (parent scope/origin 🏡)

///////////////////////////////// Closure Examples ////////////////////////////////////
let f; //f is defined in the global scope, created in the global scope

const g = function () {
  const a = 23;
  f = function () {
    //f is reassigned to a function inside the g function. It closed over variable environment inside the g function, including the a variable
    // f function connected to g function (parent scope) and the variables inside parent scope g
    console.log(a * 2); //the a variable is inside the backpack of the f function
  };
};

const h = function () {
  const b = 777;
  f = function () {
    //f is reassigned AGAIN to a function inside the h function. It NOW closed over variable environment inside the h function, including the b variable
    console.log(b * 2); //the b variable is NOW inside the backpack of the f function
  };
};

g(); //The g function declares a variable and assigns it to 23. It also reassigns f to a function
f(); //The f function (person 🚶🏽‍♂️), which is born in the g function(parent scope 🏡), has access to (connection 🔗) the a variable(variables 🗒) from the g function (parent scope 🏡)
console.dir(f); //Closure has a value of a variable

//h function reassigned the f-function to a new function
h(); //The h function declares b variable and assigns it to 777. It also reassigns f to a NEW function
f(); // The f function (person 🚶🏽‍♂️) is REBORN in the h function(parent scope 🏡), and now has access to (connection 🔗) the b variable(variables 🗒) from the new birthplace, the h function (parent scope 🏡)
console.dir(f); //Now the Closure has a value of b variable

//Example 2//

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all the ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassenger(180, 3);

//setTimeout function takes in a function and an amount of miliseconds as arguments. It executes the input function after x miliseconds
// setTimeout(function () { //this is a callback function
//   console.log('TIMER');
// }, 1000); //after 1000 miliseconds (1 second), the callback function that has the console.log is executed.

///////// CODING CHALLENGE 1 //////////
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  // 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
  // What is your favourite programming language?
  // 0: JavaScript
  // 1: Python
  // 2: Rust
  // 3: C++
  // (Write option number)

  registerNewAnswer: function () {
    //Get Answer using prompt. Convert answer to a number
    const promptAnswer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(promptAnswer);


    //Register the new answer
    //Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
    typeof promptAnswer === 'number' && //check if answer is a number and if true
      promptAnswer < this.answers.length && //then check if answer is below the length of answers array (max length = 3) and if this is true
      this.answers[promptAnswer]++; //execute the code and add 1 to the value of the index position depending on the answer entered in the prompt input by the user
    console.log(this.answers);
    //Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    this.displayResults();
    this.displayResults('string');
  },

  //Display the results
  //Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
  displayResults: function (type = 'array') { 
    if (type === 'array') {
      console.log(`${this.answers}`);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};


//Make the Answer Poll button on the page clickable
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); //use bind to bind the this.keyword to the poll object

//   BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
//   BONUS TEST DATA 1: [5, 2, 3]
//   BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


//
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //using .call(method) manually sets this.keyword to a new object with the value set as an array
poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
*/

///////// CODING CHALLENGE 2 //////////

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//the IIFE runs immediately when we load the page, it is pushed into and popped off of the callstack, and executes immediately. The IIFE function declares the header variable and assigns it to the h1 element using document.query selector, it changes the header color to red. It also creates an event listener function with the click and a callback function as parameters

//The callback function inside the event listener is born, originates in the IIFE function. BUT the callback function will only actually execute when we click the body element.

//The callback function was born in the IIFE function and is connected to the IIFE function. It has access to the IIFE variables EVEN THOUGH the IIFE is no longer in the callstack due to closure. IIFE has been garbage collected.

//Somewhere in the engine the parent scope, the IIFE's variables are still accessible and can be used by the event listener's callback function.

//The header variable is in the backpack of the event listener's function
