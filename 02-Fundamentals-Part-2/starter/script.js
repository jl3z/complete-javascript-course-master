//////////////////////////////////////////////////////////////////////////
//Activating Strict Mode

//No code can be placed before the strict statement or it will not work. Always place at the beginning of scripts to write more secure code.

"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense)console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

//////////////////////////////////////////////////////////////////////////
//Functions//
/*
function logger() { //this function has no parameters
    console.log('My name is Julian')
}// this function does not return anything. It only logs or print a value to the console. 

//invoking, running, or calling the function. These terms can be used interchangeably and means that we are using, calling, invoking or running the function
logger(); //specifying the argument does not matter here
logger();
logger();

//the function was called three times and the code executed three times
//when we write functions, we also pass data into a function and a function can also return data that we can use elsewhere in a program
//a function can receive data and return data


function fruitProcessor (apples, oranges){ //parameters represent the input data of this function. It's like we are leaving them as blank spaces that will fill in once we call the function as arguments
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //used the value to build the juice string
    return juice; //result of executing this function will be the juice value that was returned
}

const appleJuice = fruitProcessor(5, 0); //to return the value we called the function with two arguments, actual values of the functions parameters. we need save the returned value to a variable. 
console.log(appleJuice); //we logged the value of the function
console.log(fruitProcessor(5, 0)) //In this case, we did not capture the value into a variable, we simply logged the result to the console directly

const appleOrangeJuice = fruitProcessor(2, 4); //Once again we are defining specific values which are the arguments that will get passed into the function as parameters
console.log(appleOrangeJuice);//console log is a built in function and the result is a value/message appearing in the developer console

//Keep our code D.R.Y. Don't Repeat Yourself//
*/

//////////////////////////////////////////////////////////////////////////////
//Practice Assignments Fundamentals Pt. 2

// function describeCountry (country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// console.log (describeCountry('Italy', 61, 'Rome'));
// console.log (describeCountry('Finland', 5, 'Helsinki'));
// console.log (describeCountry('USA', 332, 'Washington D.C.'));

//Function Expression
// function percentageOfWorld1 (population){
//     return (population/7900) * 100;
// }

// const population1 = percentageOfWorld1(330);
// const population2 = percentageOfWorld1(5);
// const population3 = percentageOfWorld1(30);

// console.log(population1);
// console.log(population2);
// console.log(population3);

// //Function Declaration
// const population4 = percentageOfWorld2(1100);
// const population5 = percentageOfWorld2(50);
// const population6 = percentageOfWorld2(61);

// function percentageOfWorld2 (population) {
//     return (population/7900) * 100
// }

// console.log(population4);
// console.log(population5);
// console.log(population6);

// //Arrow Function
// const percentageOfWorld3 = population => (population/7900) * 100;
// const population7 = percentageOfWorld3(330);
// console.log(population7);

//Functions calling other Functions
// function describePopulation (country, population){
//     const percentagePop = percentageOfWorld1(population)

//     const result = `${country} has ${population} million people, which is about ${percentagePop}% of the world`
//     return result;

// }

// console.log(describePopulation('China', 1441));
// console.log(describePopulation('USA', 330));
// console.log(describePopulation('Finland', 60));

// const populations = [330, 1100, 61, 55];
// console.log(populations.length === 4)

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// const neighbors = ['Canada', 'Mexico', 'Russia'];
// console.log(neighbors);

// neighbors.push('Utopia');
// console.log(neighbors);

// neighbors.pop('Utopia');
// console.log(neighbors);

// if (!neighbors.includes('Germany')){
//     console.log('Probably a central European country :D');
// }

// neighbors[neighbors.indexOf('Mexico')] = 'Bahamas';
// console.log(neighbors);

// const myCountry = {
//     country: 'USA',
//     capital: 'Washington DC',
//     language: 'english',
//     population: 332,
//     neighbors: ['Canada', 'Mexico', 'Russia'],
//     describe: function (){
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`
//     },
//     checkIsland: function(){
//         this.isIsland = this.neighbors.length === 0 ? `${this.country} is an island}` : `${this.country} is not an island`;
//         return this.isIsland;
//     }
// };

// console.log(myCountry.describe());

// myCountry.population += 2
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry['population']);

// console.log(myCountry.checkIsland());

// for (let vote = 1; vote <= 50; vote++){
//     console.log(`Vote number ${vote} is currently voting 🗳`)
// }

// function percentageOfWorld1 (population){
//     return (population/7900) * 100;
// }

// const population1 = percentageOfWorld1(330);
// const population2 = percentageOfWorld1(1100);
// const population3 = percentageOfWorld1(61);
// const population4 = percentageOfWorld1(55);

// console.log(population1, population2, population3, population4);

// const populations = [330, 1100, 61, 55];
// const percentages2 = [];
// const percentages3 = [];

// for (let i = 0; i < populations.length; i++){
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// };

// let i = 0;
// while (i < populations.length){
//     const perc = percentageOfWorld1(populations[i]);
//     percentages3.push(perc);
//     i++;
// }

// console.log(percentages2);
// console.log(percentages3);

// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbors.length; i++){
//     for (let j = 0; j < listOfNeighbors[i].length; j++){
//         console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//     };
// };

//////////////////////////////////////////////////////////////////////////
//Function Declarations vs. Expressions//

/*
//Function Declaration
function calcAge1(birthYear) { //parameter is a placeholder
    return 2037 - birthYear;
}; //this is a genertic function that will work for any birth year that we give as an argument

const age1 = calcAge1(1991); //argument is the actual value to fill in the placeholder that is the parameter
console.log(age1);


//Function Expression
// works the exact same way but the function can be called before defining it

const calcAge2 = function (birthYear){ // storing a function without a name, an anonymous function, into a valiable which will be the function. This function is just a value, like a number, string, or boolean, it is a value.
    return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

//The main practical difference between function expressions and declarations is that we can call function declarations before they are defined in the code

const age1Declaration = calcAge1(1991); //We can call the function before we define it below in the code

function calcAge1(birthYear) { //We declare the function here after we called it. We can do this in a function delaration
    return 2037 - birthYear;
};

console.log(age1Declaration);

//Different developers prefer different formats. Some like everything stored in variables. 
*/

//////////////////////////////////////////////////////////////////////////
//Arrow Functions//
/*
const calcAge2 = function (birthYear){ 
    return 2037 - birthYear;
};

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1985, 'Julian'));

*/

//////////////////////////////////////////////////////////////////////////
//Functions calling other Functions//
/*
const cutPieces = function (fruit){
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges){ 
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`; 
    return juice; 
}

console.log(fruitProcessor(2, 3));
*/

//////////////////////////////////////////////////////////////////////////
//Reviewing Functions//

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement; //return statement immediately returns the function, so nothing will run in the funtion after this statement
//     } else{
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1985, 'Julian'));
// console.log(yearsUntilRetirement(1950, 'John'));

//////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1: Functions//
/*
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

//TEST DATA 1
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
console.log(avgDolphins, avgKoalas);

function checkWinner (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins 🙁`);
    }
};

checkWinner(avgDolphins, avgKoalas);

checkWinner(576, 111);

// TEST DATA 2
avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
*/

//////////////////////////////////////////////////////////////////////////
//Introduction to Arrays//
/*
//Arrays are a data structure where we can store variables and reference them later
//The two most important data structures in JS are Arrays and Objects

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //literal syntax using brackets to build the array
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); //array function with a new keyword uses parentheses

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //Array property. Length of the array is not zero based and gives us the actual number of things in the array
console.log(friends[friends.length - 1]);//can put any expression inside the brackets

friends[2] = 'Jay'
console.log(friends);


const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //cannot calculate the entire array
console.log(calcAge(years[2])); //but we can calcuate the elements inside the array

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//////////////////////////////////////////////////////////////////////////
//Basic Array Operations (Methods)//
/*
const friends = ['Michael', 'Steven', 'Peter']; 
console.log(friends);

//push is a method that adds elements to the end of an array
const newLength = friends.push('Jay'); //Last element added. Push is a method, which is technically a function, that is attached to this array.
console.log(friends);
console.log(newLength); //We can take the result of the function and store it into a variable and use the variable

//unshift adds elements to the beginning of an array
friends.unshift('John'); //First element added
console.log(friends);

//pop removes elements from the end of an array. pop will remove the last element
friends.pop() // Last element removed
const popped = friends.pop();
console.log(friends);
console.log(popped);

//shift removes elements from the beginning of an array. shift will remove the firstt element
friends.shift(); //First element removed
console.log(friends);

console.log(friends.indexOf('Steven'));// indexOf function call returns the index that this element is located. Steven is element #1. 
console.log(friends.indexOf('Bob')); //if we try to call an element that is not in the array, we will get -1.

friends.push(23);
console.log(friends.includes('Steven')); //includes returns true if the element is in the array or false if it is not in the array
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //includes tests with strict equality so "23" string will not be false even though we pushed the number into the array

//can use the includes to write conditionals which is a useful application of this method
if (friends.includes('Steven')){
    console.log('You have a friend called Steven!')
}
*/

//////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2: Arrays and Basic Array Methods//
/*
const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills, tips);

const calcBills = (bills, tips) => bills + tips 

const totals = [calcBills(bills[0],tips[0]), calcBills(bills[1],tips[1]), calcBills(bills[2],tips[2])]
console.log(totals)
*/

//////////////////////////////////////////////////////////////////////////
//Introduction to Objects//

//Objects are a data structure that contain key:value pairs

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

//This object contains 5 key:value pairs. Each key is also called a property. In this case, this object called 'jonas' has 5 properties, each with a different value.

//Just like arrays, we use objects to group together different variables that belong together. The biggest difference is that the order of these values does not matter when we want to retrieve them from the object. We access the object elements by their keys. Use objects for less structured data.

//////////////////////////////////////////////////////////////////////////
//Objects: Dot vs. Bracket Notation//
/*
//How to retrieve and change data from objects//


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas); //Properties will be ordered alphabetically in the console

console.log(jonas.lastName);// the dot is an operator that will go into the object called and retrieve the property with the specified value
console.log(jonas['lastName']); // retrieving using the bracket notation requires entering the property as a string

const nameKey = 'Name'
console.log(jonas['first' + nameKey]); //We can put any expression in the square brackets. 
console.log(jonas['last' + nameKey]);

//When to use brackets vs. dot notation
//When we need to compute the property name, we have to use bracket notation. In any other case, use the dot notation

//const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.");

//console.log(jonas.interestedIn);// will result in undefined because there is no property in 'jonas' object that is called interestedIn. interestedIn is not defined in the 'jonas' object

//console.log(jonas[interestedIn]); //By using the bracket notation, it is an expression, this expression will be evaluated using the interested in variable

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'

console.log(jonas);

//Mini Object Challenge
//Use template literals and object methods to write the string: 'Jonas has 3 friends, and his best friend is called Michael.'

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0] + '.');

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
*/

//////////////////////////////////////////////////////////////////////////
//Object Methods//
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // any function attached to an object is called a method. Only a function expression would work inside of an object
    // calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this); //'this' keyword points to the whole "jonas" object
    //     return 2037 - this.birthYear; // this.birthyear points to the value inside the birthYear property within the object 'jonas. Refernece the object itself by using this
    //  }

    calcAge: function () {
        this.age = 2037 - this.birthYear; //creating a new property, 'jonas.age' and setting it to the calculated value of 2037 - the birthYear in the jonas object.
        return this.age;
     },

     getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
     }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);



// console.log(jonas['calcAge'](jonas['birthYear']));//Calling a function using bracket notation

//Mini Challenge
//Write method called getSummary should return a string: "Jonas is a 46 year old teacher, and he has a driver's license."
console.log(jonas.getSummary());

*/

//////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 3: Object and Object Methods//
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
*/

//////////////////////////////////////////////////////////////////////////
//Iteration: The for Loop//
/*
// console.log('Lifting weights repetition 1 🏋🏽‍♀️');
// console.log('Lifting weights repetition 2 🏋🏽‍♀️');
// console.log('Lifting weights repetition 3 🏋🏽‍♀️');
// console.log('Lifting weights repetition 4 🏋🏽‍♀️');
// console.log('Lifting weights repetition 5 🏋🏽‍♀️');
// console.log('Lifting weights repetition 6 🏋🏽‍♀️');
// console.log('Lifting weights repetition 7 🏋🏽‍♀️');
// console.log('Lifting weights repetition 8 🏋🏽‍♀️');
// console.log('Lifting weights repetition 9 🏋🏽‍♀️');
// console.log('Lifting weights repetition 10 🏋🏽‍♀️');

//Instead of repeating the console.log, we can write a for loop that will print the phrase to the console as long as the condition is true. In this case, as long as the amount of reps is 10 or less.


//for loop keeps running while the condition is true
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋🏽‍♀️`)
};
//We wanted to log our string 10 times to the console, but a for loop could be used for any other repetitive operation.
*/

//////////////////////////////////////////////////////////////////////////
//Looping Arrays, Breaking and Continuing//

/*
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

const types = [];

//If we are looping through an array, we start counting at 0, which is the index number for the first element in an array. This will loop until we reach the last element of the array. The current index, i, needs to stay below the length of the array we are looking through
for (let i = 0; i < jonasArray.length; i++){
    //reading from the jonasArray
    console.log(`${jonasArray[i]}`, typeof jonasArray[i]);

    //filling in the types array
    // types[i] = typeof jonasArray[i];
    //another, better, way of filling in the array using push and pushing the value into the last element of the array
    types.push(typeof jonasArray[i]);
};


console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

//calculate the ages and store them in a new array

for (let i = 0; i <years.length; i++){
    ages.push(2037 - years[i]);
};

console.log(ages);

//Continue and Break
//Continue exits the current iteration of the loop and continue to the next iteration
//Break is used to terminate the entire loop
console.log('----ONLY STRINGS-----')

for (let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(`${jonasArray[i]}`, typeof jonasArray[i]);
};

console.log('----BREAK WITH NUMBER-----')
for (let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break;

    console.log(`${jonasArray[i]}`, typeof jonasArray[i]);
};
*/

//////////////////////////////////////////////////////////////////////////
//Looping Backwards and Loops in Loops//
/*
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

//0, 1, ..., 4
//4, 3, ..., 0

for(let i = jonasArray.length - 1; i >= 0; i--){
    console.log(i, jonasArray[i]);
};

//Loop within a loop

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-----------Starting Exercise ${exercise}`);
    
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`)
    }
}
*/

//////////////////////////////////////////////////////////////////////////
//The while Loop//
/*

//Called a while loop because it will run WHILE the condition is true
let rep = 1;
while (rep <=10){
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏽‍♀️`);
    rep++
};

//Can be used in a larger variety of situations because all the while loops means is a condition. Any problem without a counter. It can depend on a random variable.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
};

//We had no way of knowing we would have to roll the dice before we reached a 6.
*/

//////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 4: Object and Object Methods//
/*
//Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

//Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.
const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
const calcTotalBills = (bills, tips) => bills + tips 

const calcAverage = function (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
   return sum/arr.length;
};

//Use a for loop to perform the 10 calculations!
//Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
//Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTotalBills(bills[i],tips[i]));
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));

// const testArray = (26.4 + 339.25 + 202.4 + 528 + 44.4 + 120.75 + 12 + 1320 + 98.9 + 59.8)/10
// console.log(testArray);
*/

/* ========== *
 * Challenge 1 *
 * =========== */
/*
Replace the blank underscores inside the console logs with the data type (i.e. 'string') you think each value will be. (Leave the quotes)
Ex.
var myStr = "hello"
  console.log(typeof myStr === "string") //=> true
*/

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number");
// console.log(typeof 22 === "number");
// console.log(typeof true === "boolean");

var myVar;
// console.log(typeof myVar === "undefined");

// myVar = "Julian";
// console.log(typeof myVar === "string");

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
 * Challenge 2 *
 * =========== */
/*
Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.
*/

//input: strings
//output: string

function buildSentence(word1, word2, word3) {
  //your code goes here...

  //use a template literal and log string
  //use string methods to replace first letter of word1 with capital letter
  console.log(
    `${word1.replace(
      word1,
      word1[0].toUpperCase() + word1.slice(1)
    )} ${word2} ${word3}.`
  );
}

// buildSentence("coding", "is", "awesome"); //=> "Coding is awesome."
// buildSentence("we're", "number", "1"); //=> "We're number 1."

/* ========== *
 * Challenge 3 *
 * =========== */
/* 
Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.

Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []
 */

//index: string
//output: string

function lastLetter(word) {
  //your code goes here...
  //log last letter of input string using slice method and template literal
  console.log(word.slice(-1));
}

//Uncomment the lines below to test your code
// lastLetter("hello"); //=> "o"
// lastLetter("goodbye!"); //=> "!"
// lastLetter("ZeltoiD"); //=> "D"

/* ========== *
 * Challenge 4 *
 * =========== */
/* 
Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:
If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!
 */

//input: number, string
//output: string

function buildGreeting(time, name) {
  //your code goes here...
  //use conditional if/else to log string to console
  if (time >= 0 && time <= 11) {
    console.log(`Good Morning, ${name}!`);
  } else if (time >= 12 && time <= 16) {
    console.log(`Good Afternoon, ${name}`);
  } else if (time >= 17 && time <= 23) {
    console.log(`Good Evening, ${name}`);
  } else {
    console.log(`That's not a real time, ${name}. Maybe you need some sleep!`);
  }
}

// buildGreeting(8, "Maggie"); //=> "Good Morning, Maggie!"
// buildGreeting(12, "John"); //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey"); //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick"); //=> "That's not a real time, Derrick. Maybe you need some sleep!"

/* ========== *
 * Challenge 5 *
 * =========== */
/* 
indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.

Enter the index position you think indexOf will return for each below.
 */

//input: strings
//output: number

// //create a function
function indexOf(string1, string2) {
  //return evaluated result of invoking the indexOf method on string1 passing in the parameter string2
  return string1.indexOf(string2);
}

// console.log(indexOf("CodeSmith", "o") === 1);
// console.log(indexOf("hello", "ll") === 2);
// console.log(indexOf("zebra", "z") === 0);
// console.log(indexOf("banana", "B") === -1);

/* ========== *
 * Challenge 6 *
 * =========== */
/* 
Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word.
*/

//input: strings
//output: boolean

function letterExists(word, letter) {
  //your code goes here...
  //log the evaluated result of invoking the includes method on the word and passing in the parameter letter
  console.log(word.includes(letter));
}

// letterExists("superman", "e"); //=> true
// letterExists("starship", "S"); //=> false
// letterExists("th1s", "1"); //=> true
// letterExists("he!lo", "!"); //=> true

/* =========== *
 * Challenge 7 *
 * ============ */
/* 
Create a function isPrime that console.logs a boolean indicating if `number` is prime or not. */

//input: number
//output: boolean

//Prime is a number over 1 that is only divisible by itself and 1
function isPrime(number) {
  // your code here...
  //conditional statement using if statement
  if (number < 2) return false;
  //calculate if prime using modulus operator
}

isPrime(-7); // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false

/* ========== *
 * Challenge 8 *
 * =========== */
// Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.

function range(start, end) {
  //your code goes here...
}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>

/* =========== *
 * Challenge 9 *
 * ============ */
/*
Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist. Assume the `ele` will be a primitive data type (no arrays or objects).

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!
*/

function myIndexOf(array, ele) {
  // your code here...
}

//myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
//myIndexOf(["a", "b", "c"], "a") //=> 0
//myIndexOf(["a", "b", "c"], "d") //=> -1

/* =========== *
 * Challenge 10 *
 * ============ */
/*
Create a function unique that console.logs an array where all the duplicates of the input array have been removed; in other words, every element remaining is unique.
*/

function unique(array) {
  //your code goes here...
}

// unique([1, 1, 2, 3, 3]) => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) => ["a", "c", "aa", "b"]

/* =========== *
 * Challenge 11 *
 * ============ */
/* 
Create a function longestWord that that retuns the longest word of a sentence.
If there are ties, the function should return the later word.
*/

function longestWord(sentence) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''

/* =========== *
 * Challenge 12 *
 * ============ */
/* Create a function disemvowel that takes in a string and returns a string with all vowels removed.
 */

function disemvowel(string) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

/* =========== *
 * Challenge 13 *
 * ============ */
/* 
Create a function divisibleByFivePairSum that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.
*/

function divisibleByFivePairSum(array) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

/* =========== *
 * Challenge 14 *
 * ============ */
/* 
Create a function highestScore that takes in an array of student objects as a parameter.

It should return a string that corresponds to the student with the highest score.

The string should contain that student's initials concatenated with their id.

Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties). 
*/

function highestScore(students) {
  // your code here...
}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'

/* =========== *
 * Challenge 15 *
 * ============ */
/* 
Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs. 
*/

function leastCommonMultiple(num1, num2) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

/* ========== *
 * Extension 1 *
 * =========== */
/* 
Create a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped. 
*/

function arrayBuilder(count) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []

/* ========== *
 * Extension 2 *
 * =========== */
/* 
Create a function objectBuilder that takes in a number and returns an object whose keys are 0 up to number and the values are that same number multipled by 5. 
*/

function objectBuilder(count) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }

/* ========== *
 * Extension 3 *
 * =========== */
/* 
Create a function secretCipher that takes in an string(sentence) and an object(cipher). Return a string where every character is replaced with its cooresponding value in the cipher. If the character doesn't exist in the cipher, use the original character. 
*/

function secretCipher(sentence, cipher) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

/* ========== *
 * Extension 4 *
 * =========== */
/* 
Create a function passingStudents that accepts an array of student objects.
It should iterate through the list of students and return an array of the names of all the students who have an average grade of at least 70. 
*/

function passingStudents(students) {
  // your code here...
}

//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
