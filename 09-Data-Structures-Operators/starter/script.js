'use strict';

// Data needed for first part of the section //

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  ///////////////////// ES6 Enhanced Object Literals //////////////////

  //ES6 Enhanced Object Literals
  openingHours,

  //ES6 Enhanced Object Methods

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(
    { starterIndex = 1, mainIndex = 1, time = '20:00', address } //Using an object as a function parameter with default values for each property
  ) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////// Map Iteration ////////////////////////////////////
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again! ⛔️'],
]);

console.log(question);

//Same array structure from calling Object.entries(method)
//converting an object into a map using Object.entries(method)
console.log(Object.entries(openingHours)); //An array of arrays
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration is possible on maps because they are iterables

//Quiz App

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};

const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

//////////////////////////////////// Maps ////////////////////////////////////

/*
//Maps are a data structure that we can use to map values to keys. Data in maps is stored in key:value pairs

//Unlike objects where keys are only strings, Keys for maps can be anything: strings, objects, arrays, other maps, etc.

const rest = new Map();//create a map

//Add elements to the map using .set(method)
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
//Updates the map that is called on and it returns the map
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
//When using get, the data type matters

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
// rest.set([1, 2], 'Test');
const arr = [1, 2];//create an array
rest.set(arr, 'Test');//use the array as a key in a set
//DOM elements are a special type of object that can be used as keys in a set
rest.set(document.querySelector('h1'), 'Heading');//can use document.querySelector() as a set key
console.log(rest);
console.log(rest.size);

//console.log(rest.get([1,2])); //will not retrieve the array inside the set
console.log(rest.get(arr));


*/

//////////////////////////////////// Sets ////////////////////////////////////
/*
//Used when we need to work with unique values
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); //result: Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(orderSet.size); // result: 3
console.log(orderSet.has('Pizza')); //result: true
console.log(orderSet.has('Bread')); // result: false
orderSet.add('Garlic Bread'); //result: Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
orderSet.add('Garlic Bread'); //result: Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
orderSet.delete('Risotto'); //result: Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
// orderSet.clear(); // empties the set
console.log(orderSet);

//There is no way of getting values out of a set. THere are no indexes. There is no need to get data out of a set. If the values are unique and their order doesn't matter, then there is no point of retrieving values out of a set. 

//All we need to know is if a certain value exists in a set or not, which is why we have the set.has() method for sets. If the goal is to store values in order and then retrieve them, we need to use an array. We would not use a set a set.


//Sets are iterable so we can loop over sets, just like any other iterable
for (const order of orderSet) console.log(order);

//Example of use cases for sets
//Sets are used to remove duplicate values from an array.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);// creates a new set with staff array without duplicate values
const staffUnique = [...new Set(staff)]; //create an array called staffUnique using the spread operator and new Set constructor of only the unique values from staff array
//Spread operator unpacks the entire set, since it is an iterable, into an array
console.log(staffUnique);

//Tells us how many different positions, or elements, there are in a set or any iterable
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // logs the number of unique elements in the array we passed through: 3

console.log(new Set('jonasschmedtmann').size); //logs the number of unique leteters in a  string: jonaschmedt = 11 unique characters

// console.log(new Set('Jonas')); //result: Set(5) {'J', 'o', 'n', 'a', 's'}

*/

///////////////////// Looping Objects: Object Keys, Values, and Entries //////////////////
/*
//Looping over property names (object keys)
const properties = Object.keys(openingHours); //Object.keys returns the key names from an Object
console.log(properties); //Returns an array with the propery names
//We can use this to compute how many proprties are in the object

//We want to print a string with the number of days the restaurant is open
let openString = `We are open ${properties.length} days of the week: `;

for (const day of properties) {
  openString += `${day}, `;
}
console.log(openString);

//Looping over a property's values (or the object values)
const values = Object.values(openingHours); //Object.values returns values from an object's keys
console.log(values); ////Returns an array with the property values

//Looping over the ENTIRE object using entries, keys + values
//Entire Object

const entries = Object.entries(openingHours); // Returns an array with the property keys (weekdays) and values stored in an array

console.log(entries); //Returns an array with the property keys (weekdays) and values (object with open and close hours)
//Here the value is an object

// [key, value]
for (const [key, { open, close }] of entries) {
  //We can destructure the array and nested object and loop through entries
  console.log(`On ${key} we open at ${open} and close at ${close}`); //logs each key and each value into the string
}
*/

///////////////////// Optional Chaining //////////////////
/*

//Checks if a property or method exists in an object or if an array is empty

//WITHOUT Optional Chaining
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH Optional Chaining
//Only if the property before the ?. exists, if it is not null or undefined, then the following property will be read, if it does not exist undefined will be returned
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example: Optional Chaining and for-of Loop
//We want to log the hours on the days we are open, otherwise we are closed

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  //Loops through the days
for (const day of days) {
  // console.log(day);
  
  //Creating a constant called open to check if the day is in restaurant property openingHours, if it is not then assign closed
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  
  //We use Nullish Coalescing Operator (instead of the Or Operator)
  console.log(`On ${day}, we open at ${open}`);
}

//Methods and Optional Chaining
//Using optional chaining to check if the method exists in the object, and if is doesn't exist log that the method doesn't exist
console.log(restaurant.order?.(0, 1) && 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) && 'Method does not exist');

//Arrays and Optional Chaining
//Use optional chaining to check if an array is empty
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]; //logs name value
const users = []; // logs 'User Array Empty'

//Checks if users at index 0 exists and if it exists, log name value for user[0] to the console, if user[0] does not exist log 'User Array Empty'
console.log(users[0]?.name ?? 'User Array Empty');

*/

///////////////////// Looping Arrays: The for-of Loop //////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//The for-of Loop will automatically loop over the entire array and at each iteration, it will give us access to the current array element, which we can specify in the variable.
//The variable is the current element in each iteration.
//Can use continue or break

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); //each item is an array with the index and the array element
}

*/

//console.log([...menu.entries()]);
// Logs an array where each element contains a new array that contains the element and the index number of the element from the original array

///////////////////// Logical Assignment Operator (ES2021) //////////////////
/*
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR Assignment Operator
//assigns a value to a variable if that variable is currently FALSEY

//assigns value of numGuests from object if the property exists OR it creates a new numGuests property in the object assigns 10 as the default value
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//Logical OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Logical Nullish Assignment Operator
//assigns a value to a variable if that variable is currently NULLISH (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//Logical AND Assignment Operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//assigns a value to a variable if that variable is currently TRUTHY
rest1.owner &&= '<ANONYMOUS>'; //falsey so nothing happened
rest2.owner &&= '<ANONYMOUS>'; //truthy so it reassigned the value to <ANONYMOUS>
//If we need to assign a value to a variable that is already defined, we can use the Logical AND operator

console.log(rest1); // Had a numGuests property so it kept the value as is
console.log(rest2); // Didn't have numGuests property so it created a new property called numGuests and set the value to 10

*/

///////////////////// Nullish Coalescing Operator (??) //////////////////
/*
restaurant.numGuests = 0; //We set the value to 0, therefore we would want 0 to be assigned to guests
const guests = restaurant.numGuests || 10; // When we set the value to 0, JS will assign the default value to guests because it is falsey, even though we set the value to 0 and would want 0 returned
console.log(guests);

//Nullish Coalescing Operator (??) fixes this error
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//Nullish Coalescing Operator works with the concept of NULLISH values rather than FALSEY values, null or undefined 
//Nullish values are null and undefined (NOT 0 or ' '). 
//It is as if 0 or empty string are not fasley values

*/

///////////////////// Short Circuiting (&& and ||) //////////////////
/*
//Comparison Operators can use ANY data type, return ANY data type, and do Short-Circuiting or Short Circuit Evaluation

////OR Operator Short Circuiting////
console.log('--------- OR -----------');
//Result of the OR operator doesn't always have to be a boolean

//Short Curcuiting W/ OR Operator = If the first value is a TRUTHY value, it will immediately return the first TRUTHY value and skips the remaining values
console.log(3 || 'Jonas'); //result is 3 because it is a truthy value
console.log('' || 'Jonas'); // result is Jonas because an empty string is a falsey value
console.log(true || 0); // result is true because 0 is a falsey value
console.log(undefined || null); // result is null because undefined is a falsey value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //result is Hello because it is the FIRST truthy value

//Practical example: AND Operator Short Circuiting
// We can use the OR Operator to set a default value
// restaurant.numGuests = 23

//Using the ternary operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Using the OR Operator Short Circuiting
//First operant is false so it will return the truthy value: 10
const guests2 = restaurant.numGuests || 10; //
console.log(guests2);

////AND Operator Short Circuiting////
console.log('--------- AND -----------');

//Short Curcuiting W/ AND Operator = If the first value is a FALSEY value, it will immediately return the first FALSEY value or the last value if both are TRUTHY values
console.log(0 && 'Jonas'); //result is 0 because it is a falsey value
console.log(7 && 'Jonas'); //result is 'Jonas' because it is the last value
//AND operator is only true if ALL the operants are true

console.log('Hello' && 23 && null && 'jonas'); // result is null because it is a falsey value

//Practical example: AND Operator Short Circuiting
//We can use the AND Operator to execute code in the second operant if the first operant is true

//Using an if Statement
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//Using the AND Operator Short Circuiting
//First Operant is TRUE so it will execute the code in the second operant

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/////////////////////Rest Pattern and Rest Parameters//////////////////
/*
//1. Destructuring
//Rest Pattern packs elements into an array except the ellipses is on the LEFT side of the assignment operator (the = sign)

//Arrays
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. Functions and Rest Arguments/Parameter

const add = function (...numbers) {
  // using the rest parameter allows us to pass in individual values and arrays when we call the function.
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //Using the spread operator to destructure the array

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

//Rest Parameters serves to collect remaining unused argumentss that were not used in the function's parameter

//Spread and Rest syntax look exactly the same, (...), depending on where they are used.
//Spread operators are used where we would otherwise write VALUES separated by a comma
//Rest Pattern is used where we would write VARIABLE NAMES separated by commas. 
*/

/////////////////////The Spread Operator//////////////////
/*


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Spread operator (...) - NEW Modern JS Operator
//Takes all the elements from the arr array and writes them individually into the newArr array
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); //Spread Operator logs the individual elements of the array

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // creating a new array called newMenu and adding an element 'Gnocci'. This is not manipulating object property restaurant.mainMenu 
console.log(newMenu); //adds the original elements from mainMenu and 'Gnocci' to a new array

/////////////////////////////IMPORTANT NOTE/////////////////////////////
//Spread Operator helps us get elements out of arrays without creating new variables. We can only use it in places where we would write values separated by commas.//

//Spread Operator can create shallow copies of Arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Spread Operator can merge two or more arrays into a new variable
const menuMerge = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuMerge);

/////////////////////////////IMPORTANT NOTE/////////////////////////////
//The Spread operator works on all iterables: arrays, strings, maps, sets. But NOT objects since objects are not iterable. Multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.//

//The Spread operator on a string
const string = 'Jonas';

const letters = [...string, ' ', 'S.'];
console.log(letters);
console.log(...string);

//Multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array

//Spread Operator as a function argument
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients); //ingredients is an array and its elements are separated by a comma

//We can call a function using the Spread Operator in the argument
//Typically we would call each element of the array as an argument
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//Using the Spread Operator is cleaner code. It also helps because we don't always know the number of elements in an array. The spread operator calls all the elements of an array as an argument
restaurant.orderPasta(...ingredients); 


//Objects and the Spread Operator

//We can create a new restaurant object using the spread operator and add additional properties to the new object

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

//We can create a shallow copy of the restaurant object using the spread operator and change the shallow properties of the new object. Can be used instead of Object.assign.

const restaurantCopy = { ...restaurant }; //Creates a copy of object and assigns it to a new variable
restaurantCopy.name = 'Ristorante Roma'; //Reassigns the name property of the copied object

console.log(restaurantCopy.name); //logs: 'Ristorante Roma'
console.log(restaurant.name); //logs: 'Classico Italiano'


*/

/////////////////////Destructuring Objects//////////////////
/*

//Use curly braces and specify the names of the proprties in the object

const { name, openingHours, categories } = restaurant;

//The above will create new constant variables (name, categories and openingHours) from the restaurant object and store the values from the object's property to the new variable
          //const name = 'Classico Italiano'
          //const openingHours = {thu: {open: 12, close: 22,}, fri: {open: 11, close: 23,}, sat: {open: 0, // Open 24 hours close: 24,}}
          //const categories = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

console.log(name, openingHours, categories);

//Destructure object properties and assign them to new variable names using a colon//
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting default values to a destructured object using an empty array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables when destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//We mutate an object's properties by wrapping destructuring assignment in parentheses like it's a function
({ a, b } = obj);
console.log(a, b);

//Nested objects: destructuring objects within objects

//We have an object, openingHours, with objects nested within its properties thu, fri, sat
//We can also reassign the nested object's properties to new variables using a colon
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


//Passing an object as an argument into a function
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via Del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via Del Sole 21',
  starterIndex: 1,
});

*/

/////////////////////Destructuring Arrays//////////////////
/*
//Traditional Array Deconstruction

//Create an array
const arr = [2, 3, 4];
//Create a constant for each element of the array
const a = arr[0];
const b = arr[1];
const c = arr[2];

//New ES6 way of destructuring an Array
//Create a variable using [] to hold the new variable name for each element we want to assign to a variable and make it equal to the array we want to destructure
const [x, y, z] = arr;
console.log(x, y, z);

//The original array will remain intact
console.log(arr);

//Destructuring an array from an object
//Leave a black space for the elements of the array we want to skip
// let [main = 'Italian', skip 'Pizzeria', secondary ='Vegetarian', skip 'Organic'] will create a variable main = 'Italian' and secondary = 'Vegetarian'

let [main, , secondary] = restaurant.categories; 
//let main = restaurant.categories[0], SKIP THE SECOND ELEMENT AT INDEX 1, let secondary = restaurant.categories[2]

console.log(main, secondary); // will log: Italian Vegetarian

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Best way to switch variables
[main, secondary] = [secondary, main]; // this will switch the variables
console.log(main, secondary); //will log: Vegetarian Italian

//Using a function to destructure the array

//Receive two return values from a function. Immediately creating two variables from one function call.
const [starter, mainCourse] = restaurant.order(2, 0); //declares: const starter = starterMenu[2], const mainCourse = mainMenu[0]
console.log(starter, mainCourse); //'Garlic Bread', 'Pizza'

//Nested Array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Set default values for destructured array
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

*/

/////////////////////Data Structures, Modern Operators and Strings//////////////////
//Coding Challenge 1//

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*

//Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//The first player in any player array is the goalkeeper and the others are field players.
//For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored with ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

//Coding Challenge 2//
/*

//Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//write a for-of loop where we create a constant for each goal and each player, looping through the scored using the score.entries method
for (const [goalIndex, player] of game.scored.entries()) {
  //game.scored.entries() is an array where each element of the arrray contains a new array that contains the element and the index number of the element from the original scored array
  console.log(`Goal ${goalIndex + 1}: ${player}`); // print each player name to the console, along with the goal number. Goal number is index + 1 since index starts at 0.
}

//Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

const oddValues = Object.values(game.odds);
// console.log(oddValues);

const calcAverage = function (arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum / arr.length;
};
console.log(calcAverage(oddValues));

let average = 0;
for (const odd of oddValues) average += odd;
average /= oddValues.length;
console.log(average);

//Print content of the object to the console
//Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

//console.log(`Odd of victory(if team1 or team2) teamKey: teamOddValue` or `Odd of draw(if x): draw value);

//Use a loop to print each OddKey: OddValue
for (const [team, odd] of Object.entries(game.odds)) {
  //Object entries of game.odds creates an array of arrays with the team and the odd
  // console.log(team, odd);
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`; //create a string using a ternary operator
  // if team is equal to 'x' then the string should be 'draw', if it is not 'x' the string should be 'victory' and the team's name from the game object
  //We go into the game object and we take the property called 'team'
  console.log(`Odd of ${teamString}: ${odd}`);
}

//Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
//loop over the array game.scored
for (const player of game.scored) {
  console.log(player);
  //add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

//Coding Challenge 3//
/*

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

//After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL

for (const [mins, events] of gameEvents) {
  const half = mins <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${mins}: ${events}`);
};

*/

const airline = 'TAP Air Portugal';
const plane = 'A320';

///////////////////////////////// Working with Strings Part 1 ////////////////////////////////////
/*
//We can grab a character of strings at a certain positions in the same way we can with arrays. Strings are 0 based
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('B737'[0]); //We can do the same directly on a string, we don't have to declare a variable

console.log(airline.length); //We can read the length property of strings, just like arrays
console.log('B737'.length);

//Strings have methods, some similar to array methods
//We can get teh position where a certain letter is in a string
console.log(airline.indexOf('r')); // Will give us the first occurance of 'r', which is at position 6
console.log(airline.lastIndexOf('r')); //Will give us the last instance of 'r', which is at position 10

console.log(airline.indexOf('Portugal')); //We can look for the an entire word in a string. CASE SENSITIVE

//We can extract parts of a string using the .slice(method)
//Entering the position at which the extraction will start: Air Portugal
//will return a Substring
console.log(airline.slice(4)); //Result: Air Portugal
//Using slice only returns a new string. This does not change the underlying string since strings, as primitives, are immuatble. We would have to store the new string into a variable. e.g. const newAirlineString = airline.slice(4)
//We can enter a beginning and ending parameter to the slice method.
console.log(airline.slice(4, 7)); // Returns: Air. Stops extracting before reaching index #7. 7-4 = 3 which is the length of 'Air'

//Extracting the first word without knowing any of the indexes
//Will extract beginning at index 0 (the start of the string, and end at the first instance of a space.)
//Extracting the last word without knowing any of the indexes
console.log(airline.slice(0, airline.indexOf(' '))); //Result: TAP
// will start extracting beginning at the last space + 1. We don't need to specify an end parameter because it will grab everything after the last space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Result: Portugal

//Entering a negative number will start extracting from the end of a string
console.log(airline.slice(-2)); //Result: al
console.log(airline.slice(1, -1)); //Result: AP Air Portuga - Cuts off the last character

//Create a function that receives an airplane seat and logs if it is a middle seat.

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  //Take the last character of a string and test if is a B or an E
  const s = seat.slice(-1); //the last character is -1
  if (s === 'B' || s === 'E') {
    console.log('You have a middle seat 🙁');
  } else {
    console.log('Lucky! Not a middle seat 🎉');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Strings are primitives so WHY do they have methods?
//Whenever we call a method on a string, JS behind the scenes converts the string primitive to a string object with the same content. On that object, the methods are called. This is called BOXING. Takes a string and puts it into a box which is the object. When the operation is done, it converts is back to a string primitive.

console.log(new String('jonas')); //JS is basically doing this to a string behind the scenes when we call a function on a string
console.log(typeof new String('jonas')); // result: object

//JS converting the string object back to a string primitive after the method is called on a string
console.log(typeof new String('jonas').slice(1));//// result: string

*/

///////////////////////////////// Working with Strings Part 2 ////////////////////////////////////
/*
//Transforming the string to all lowercase or all uppercase
console.log(airline.toLowerCase()); //Result: tap air portugal
console.log(airline.toUpperCase()); //Result: TAP AIR PORTUGAL

//These methods can be called directly on a string as well eg 'Tap Air Portugal'.toLowerCase() or 'Tap Air Portugal'.toUpperCase()

//Fixing Capitalization in a passenger name
const passenger = 'jOnAS'; //We need to change this string to 'Jonas'
//Step 1: Change all the letters to lowercase
const passengerLower = passenger.toLowerCase(); //jonas
//Step 2: Take ONLY the first letter of the newly lowercase name and capitalize it, passengerLower at position 0, and add it to the rest of the lowercase string, passengerLower starting at position 1
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Result: Jonas

//Create a function that takes any passenger name and returns the correct name with corrected capitalization
const correctCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

console.log(correctCapitalization('jUliAN'));
console.log(correctCapitalization('GArrEtT'));

//Check user input email: Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; //convert email and check if they are the same

//Step 1: Convert string to lowercase
const lowerEmail = loginEmail.toLowerCase();
//Step 2: Call the .trim(method) to the LOWER cased email address
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//Instead of the separate steps, we can call string methods on strings, we can immediately call the trim method
const normailizedEmail = loginEmail.toLowerCase().trim();
console.log(normailizedEmail);

//Create a function that takes in 2 emails, one correct email, one email to check, and then return true or false and the corrected email address
const emailCheck = function (email1, email2) {
  console.log(email1 === email2);
  const normailizedEmail = email2.toLowerCase().trim();
  return normailizedEmail;
};

console.log(emailCheck('juliansant@gmail.com', '  juLiANSant@GMAIl.COM  \n'));

//Replacing parts of strings - CASE SENSITIVE
const priceGBP = '288,97£'; //Replace comma with a decimal point and the pound sign with a dollar sign
const priceUSD = priceGBP.replace('£', '$').replace(',', '.'); //First arugment is the string we want to replace, the second argument is what string will replace the first.
console.log(priceUSD);

//Replace creates a brand new string, it does not replace the original string

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//Only replaced the first occirance of 'door' in the string.
console.log(announcement.replace('door', 'gate')); //Result: All passengers come to boarding gate 23. Boarding door 23!
//.replaceAll(method) replaces all the occurances in the string - NEW JS Function
console.log(announcement.replaceAll('door', 'gate')); //Result: All passengers come to boarding gate 23. Boarding gate 23!

//Using a regular expression will also replace all the occurances
console.log(announcement.replaceAll(/door/g, 'gate')); // place the word between slashes and use the g (for global)

//Boolean String methods
const planeNew = 'Airbus A320neo';
//Includes a string
console.log(plane.includes('A320')); // result: true - as long at it is somewhere in the string
console.log(plane.includes('Boeing')); // result: false
//Starts with a string
console.log(plane.startsWith('Air')); // result: true

//We can also use endsWith(method)
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//Practice Exercise

//Create a function to check if there are any items that are not allowed on the flight, if so, the passenger is not allowed to fly on the plane.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //convert the strings to lowercase because the following string methods are case sensitive. Better for comparison if the strings are all one case. 
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(
      '⛔️ You are NOT allowed on the plane with a knife or a gun. ⛔️'
    );
  } else {
    console.log('Welcome aboard! 🛫');
  }
};

checkBaggage('I have a laptop, some food; and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some Snacks and a gun for protection');

*/
///////////////////////////////// Working with Strings Part 3 ////////////////////////////////////
/*

/////////Split and Join////////
//Split allows us to split a string into multiple parts based on a divider string
//Using split on this string will split up the string by the '+' sign and store the reults into elements of a new array
console.log('a+very+nice+string'.split('+')); //Result: (4) ['a', 'very', 'nice', 'string']

console.log('Jonas Schmedtmann'.split(' ')); // (2) ['Jonas', 'Schmedtmann']

//We can use destructuring to create variables using split(method)
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); //will be the result of the split. Will create an array with two elements: (2) ['Jonas', 'Schmedtmann']
console.log(firstName, lastName);

//Using the .join(method), the opposite of .split(method)
//We want to make the lastName uppercase and add a 'Mr.' at the beginning of the string.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //create a variable that will join all the elements of an array into a string with a space as a divider string
console.log(newName); // Result: Mr. Jonas SCHMEDTMANN
//We get a string composed with all the parts of the arrary joined by a joining string, in this case a space.

//Very powerful and used all the time

//Capitalizing a Name
const passenger = 'jessica ann smith davis';
//Create a function where we capitalize the name properly. The first letter of each name is capital, and the remaining letters are lowercase

const capitalizeName = function (name) {
  const names = name.split(' '); //create an array of the name using the .split.(method)
  const namesUpper = []; // create an empty array where we will store the newly uppercased names
  for (const n of names) {
    //Use a for of loop to loop through the names array
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); //capitalize the first letter of each name at position 0 and joined it with the rest of the string starting at postion 1. Push each result into the empty namesUpper array

    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Use .replace.(method) instead to replace. Replace n at positon 0 with the first character to Uppercase
  }
  return namesUpper.join(' '); //return the namesUpper array as a string using the .join(method)
};

console.log(capitalizeName('jessica ann smith davis')); //Result: Jessica Ann Smith Davis
console.log(capitalizeName('jonas schmedtmann')); //Result: Jonas Schmedtmann
console.log(capitalizeName('julian santos')); //Result: Julian Santos

///Padding a string - to add a number of characters to a string until the string has the desired length
const message = 'Go to gate 23!';
//.padStart(method): Pads the beginning of a string. The first argument is the desired length of the string (e.g. 25 characters long), the second argument is the character we want to use to pad the start of string (e.g. with a '+' sign);
console.log('Jonas'.padStart(20, '+')); //Result: ++++++++++++++++++++Jonas (25 characters long with + sign to pad the beginning)

//.padEnd(method): Pads the end of a string. The pad.end(method) adds additonal padding. This string is 25 characters long after padStart, adds an additional 5 '+' signs to the end of the string using the .padEnd(method) to make it 35 characters long
console.log(message.padStart(20, '+').padEnd(30, '+')); //Result: +++++++++++Go to gate 23!+++++

//Create a function that masks the numbers of a credit card showing only the last 4 digits
const maskCreditCard = function (number) {
  const string = number + ''; //when one of the operants of a + sign is a string, it will convert all the operants to a string
  //remove the last 4 numbers and use .padStart(method) to create a stream with the same length with some kind of symbol
  const last4 = string.slice(-4); //create a variable for the last 4 letters of the string
  return last4.padStart(string.length, '*'); //return a string with the last 4 letters and the '*' character for the beginning of the string for the original length, no matter the length of the string passed through as an argument.
};

console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(89577384));
console.log(maskCreditCard('32898940382907828908'));

//.repeat(method) allows us to repeat the same string multiple times
const weatherMessage = 'Bad weather. All departured delayed! ';
//Create a larger string repeating the weatherMessage multiple times.
console.log(weatherMessage.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

//////Coding Challenge 3///////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
/*
underscore_case
 first_name
Some_Variable  
  calculate_AGE 
delayed_departure 


SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

//§ The solution only needs to work for a variable made out of 2 words, like a_b

//Create a function to convert the input text to camelCase when we click the button
//The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

//My way
document.querySelector('button').addEventListener('click', function () {
  const textInput = document.querySelector('textarea').value;
  //Remember which character defines a new line in the textarea 😉 \n
  const separateStrings = textInput.split('\n'); //separate the input text into 5 different strings
  // console.log(separateStrings);
  //create a for loop that loops through each string in the array
  for (const [index, text] of separateStrings.entries()) {
    //for the checkmark, we actually need to call the .entries(method) on the separateStrings so we can get the index number and the text itself
    const newText = []; //create a new array to store the corrected text
    const [first, second] = text.toLowerCase().trim().split('_'); //deconstruct each word from the textInput + convert the characters to lowercase, trim whitespace and split at the underscore
    newText.push(first + second.replace(second[0], second[0].toUpperCase())); //push the new camelCase word into the empty newText array
    const newString = newText + ''; //create a string of the camelCase word from the newText array
    console.log(`${newString.padEnd(20)}${'✅'.repeat(index + 1)}`); //log each newString to the console, pad each word so that it's 20 characters, and add the check mark repeated according to the index+1
  }
});

//Test Data//
// convert(`underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`);

//Jonas Solve
/*
document.querySelector('button').addEventListener('click', function () {
  const textInput = document.querySelector('textarea').value;
  //Remember which character defines a new line in the textarea 😉 \n
  const separateStrings = textInput.split('\n'); //separate into 5 different strings
  // console.log(separateStrings);
  //create a for loop that loops through each string in the array
  for (const [index, text] of separateStrings.entries()) {
    //for the checkmark, we actually need to call the .entries(method) on the separateStrings
    const [first, second] = text.toLowerCase().trim().split('_'); //deconstruct each word + convert the characters to lowercase, trim whitespace and split at the underscore
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`; //create an output string with the new camelCase word
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`); //we need to pad each word and add the check mark repeated according to the index+1
  };
});
*/

///////////////////////////////// Strings Methods Practice ////////////////////////////////////
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Format flights into the below strings with the alignment
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// `${🔴 Delayed} ${Departure/Arrival} from ${fromAirport.slice(0, 3).toUpperCase()} to ${toAirport.slice(0, 3).toUpperCase()} ${flightTime.replace(':', 'h')}`

const flightSplit = flights.split('+');
// console.log(flightSplit);

const getCode = string => string.slice(0, 3).toUpperCase(); //created an arrow function OUTSIDE the loop to slice and uppercase the from and to variables

for (const flight of flightSplit) {
  //console.log(flight); //Log each string directly to the console
  const [flightType, from, to, flightTime] = flight.split(';');
  const output = `${
    // if (flightType.startsWith('Delayed')){add 🔴  symbol} or else {empty string} using ternary operator
    flightType.startsWith('_Delayed') ? '🔴' : ''
    // from & to = slice(0, 3).toUpperCase();
  } ${flightType.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
    // flightTime = replace(':', 'h');
  )} ${flightTime.replace(':', 'h')}`.padStart(45);
  console.log(output);
}
