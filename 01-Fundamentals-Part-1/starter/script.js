/////////////////////////////////////////////////////////////////
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Julian");
console.log(23);

//variable name conventions
let firstName = "Matilda";
let first = "jonas";
let firstNamePerson = "camelCase";
let first_name_person = 'under_score';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable names can have only an underscore or a dollar sign. They cannot begin with a capital letter

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';

//variables that are all in uppercase are reserved for constants that will never change, something like Pi since that is a number that will never change
let PI = 3.1415;

//make sure variable names are descriptive. We should know what the variable is holding by its name

//this is decriptive
let myFirstJob = "Assistant";
let myCurrentJob = "Coder";

//this is not descriptive
let job1 = "assistant";
let job2 = "admin";

// console.log(myCurrentJob);
*/

/*
/////////////////////////////////////////////////////////////////////////////
//PRACTICE ASSIGNMENTS

/////////////////////////
//Practice Assignment until if/else statements
//Declare variables called 'country', 'continent' and 'population' and
//assign their values according to your own country (population in millions)
const country = "USA";
const continent = "North America";
let population = 332;

//log the values of 'country', 'continent' and 'population' to the console
console.log(country);
console.log(continent);
console.log(population);

//Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value.

const isIsland =  false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

//Log the types of 'isIsland', 'population', 'country' and 'language' to the console
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)

language = "English";
console.log(language);
console.log(typeof language);

// If your country split in half, and each half would contain half the population,then how many people would live in each half?
const halfPopulation = population / 2;
console.log(halfPopulation);

//Increase the population of your country by 1 and log the result to the console
const populationPlusOne = population + 1;
console.log(populationPlusOne);

//Finland has a population of 6 million. Does your country have more people than Finland?
const finnishPopulation = 6;
console.log(population > finnishPopulation);

//The average population of a country is 33 million people. Does your country have less people than the average country?
const averagePopulation = 33;
console.log(population > averagePopulation);

//Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description = `${country} is in ${continent} and its ${population} million people speak ${language}.`;

console.log(description);

if (population > averagePopulation){
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s is ${averagePopulation - population} below average.`)
}

//////////////////////////
//PRACTICE: Logical Operators

if (language === 'English' && population < 50 && !isIsland){
    console.log(`Sarah should live in ${country} 🇺🇸`);
} else {
    console.log(`${country} does not meet your criteria 🛫`);
}

//////////////////////////
//PRACTICE: switch Statement
switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
     case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great Language too! 😁');
}


//////////////////////////
//PRACTICE: Ternary operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`)
*/

//////////////////////////////////////////////////////////////////////
//Date Types
/*
Primitive data types are: 
Numbers (used for decimals and integers), 
Strings (used for text), 
Boolean (true/false), 
Undefined (Variable that is not yet defined or an empty value), 
Null (empty value), 
Symbol (value that is unique and cannot be changed), 
BigInt (for numbers too large to be represented by the Number data type)
*/

//JavaScript has dynamic typing: we do not have to manually define the data type of the value stored in the variable. Instead, data types are determined automatically. The value has a type, NOT the variable.

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Julian");
// console.log(typeof 'Hello');

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//Example of an undefined variable
let year;
console.log(year);
console.log(typeof year);

//defining an undefined variable
year = 1991;
console.log(year);
console.log(typeof year);

//Example of a Null variable
console.log(typeof null);
//this returns 'object' and this is a bug or an error in JS
*/

/////////////////////////////////////////////////////////////////////////
//let, const, and var variables

/*
//can assign a new value to let later on
let age = 30;
//we can reassign a new variable to let variables
//let is perfect for undefined variables where they will be defined later on
//someone's age can change
age = 31;

//const variables cannot be reassigned later on. They are constant and cannot change once they are defined. Used for variables that do not change. Immutable variable. 

//a birth year for a person doesn't change
const birthYear = 1985;

//const always need to have an initial value declared
//const job;

//Best practice for writing clean code: By default use const unless there is surity that variable is going to change later on

//Good practice to have as little variable mutations as possible. CHanges to variables can create bugs

//Avoid using var entirely
*/

////////////////////////////////////////////////////////////////////
//Basic Operators
/*
const now = 2037;
const ageJulian = now - 1985;
const ageJonas = now - 1991;
console.log(ageJulian, ageJonas);

console.log(ageJonas * 2, ageJulian / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Julian";
const lastName = "Santos";
//+ is a concatanate/addition operator
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 or x = 15 + 10 = 25
x *= 4; // x = x * 4 or x = 25 * 4 = 100
x++; // x = x + 1 or x = 100 + 1 = 101
x--; // x = x - 1  or x = 101 - 1 = 100
x--; // x = x - 1  or x = 100 - 1 = 99
console.log(x); // 15 > 25 > 100 > 101 > 99

//Comparison Operators - used to produce boolean values (true or false)
console.log(ageJulian > ageJonas);

/* 
> - greater than
< - less than
>= - greater than or equal to
<= - less than or equal to
== - loosely equal to
=== - strictly equal to
*/

/*
console.log(ageJonas >= 18);

const isFullAge = ageJonas >= 18;
console.log(now - 1991 > now - 2018);
*/

////////////////////////////////////////////////////////////////////
//Operator Precednece
/*
const now = 2037;
const ageJulian = now - 1985;
const ageJonas = now - 1991;
console.log(ageJulian, ageJonas);

console.log(now - 1991 > now - 2018);

// mathematical operators are done before the comparison operators

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageJulian) / 2;
console.log(ageJonas, ageJulian, averageAge);
*/

//////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #1 and #2
/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

//Store Mark's and John's mass and height in variables
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 95;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;


//Calculate both their BMIs using the formula (you can even implement both versions)
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);


//Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// const markHigherBMI =  markBMI > johnBMI;
// console.log(markHigherBMI);
// console.log(`It is ${markHigherBMI} that Mark's BMI is greater than John's BMI.`);

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
*/

//////////////////////////////////////////////////////////////////////////
//Template Literals
/*
const firstName = "Julian";
const job =  "engineer";
const birthYear = 1985;
const year = 2037;

const julian = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + ".";
console.log(julian);

//Template literal sting uses backticks
const newJulian = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(newJulian);

//Can use backticks to write all strings
console.log(`Just a regular string...`);

//template ltierals can create multi line strings

//old way using code
console.log('String with \n\
multiple \n\
lines')

//new way of having multiple lines using template literals
//Useful when building HTML with JS
console.log(`String
with multiple
lines
using Template Literals`)
*/

//////////////////////////////////////////////////////////////////////////
// if/else statements
/*
const age = 15;

if (age >= 18){
    console.log('Sarah can start getting a drivers licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to drive. She has to wait another ${yearsLeft} years 🔞`)
};

//The below is an "if/else Control Structure" becuase it lets us have more control over how our code is executed.

if(){

} else {

}

const birthYear = 1985;
let century;

//any variable declared inside one of the below code blocks is not accessible outside of the if/else code block
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//////////////////////////////////////////////////////////////////////////
// Type Conversions and Coercion
/*
//In JS there is type conversion and type coercion which sound similar but are different

//Type Conversion is when we manually convert from one type to another
const inputYear = '1985';
console.log(Number(inputYear), inputYear); //using the Number() function will give us a converted version of the string into a number
console.log(inputYear + 18); // the original inputYear variable is still a string and will result in concatenation
console.log(Number(inputYear) + 18); //this will convert the number and add it to 18
console.log(Number('Julian')) // results in NaN = not a number or an invalid number. It's still a number but an invalid number
console.log(String(1985), 1985); //converts a value into a string

//Type Coersion is when JS automatically converts types behind the scenes
console.log('I am ' + 37 + ' years old'); // the plus operator we used here triggers a coersion to strings. Whenever there is an operation between a string and a number, the number will be converted to a string.
console.log('I am ' + '37' + ' years old'); // this is the same as the log above

console.log('23' - '10' - 3); // this time JS converted the strings to numbers. The minus operator triggers the opposite conversion. Using a plus/addition sign would concatenate the strings
console.log('23' * '2'); // the same is true for the multiplication and division operators
console.log('23' / '2');

let n = '1' + 1; // the result is the string '11'
n = n - 1; // the minus operator converts a string, in this case '11', and subtracts 1. The result is the number 10
console.log(n); // 10


*/

//////////////////////////////////////////////////////////////////////////
// Truthy and Falsey Values
/*
//falsey values are values that are not exactly  false but will become false when we try to convert them into a Boolean

// 5 falsey values: 0, '', undefined, null, NaN 
//These will be converted to false when we try to convert them into a boolean

//Truthy values: any number that is not 0 and any string that is not empty

//Truthy and Falsey
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Julian'));
console.log(Boolean({})); //this is an empty object
console.log(Boolean(''));

const money = 0;
if (money){
    console.log("Don't spend it all!")
} else {
    console.log("You should get a job.") //0 is a falsey value
}

let height;
if (height){
    console.log('YAY! Height is defined!')
} else {
    console.log('Height is undefined.') //undefined is a falsey value
}
*/

//////////////////////////////////////////////////////////////////////////
// Equality Operators: == vs. ===
/*
//=== is strictly equal to - best practice to use strictly equal operator as default
//== is loosely equal to - full of weird rules and result in bugs. Use very sparingly and assume it doesn't really exist

const age = '18';

if (age === 18) console.log("You just became an adult (strict)");//=== is a strict equality operator

if (age == 18) console.log("You just became an adult (loosely)"); //== is a loose equality operator

const favoriteNumber = Number(prompt('What is your favorite number?'));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 321){ //'321' == 321
    console.log('Cool! 321 is an amazing number!')
} else if (favoriteNumber === 7) {
    console.log('7 is also a cool number.')
} else if (favoriteNumber === 9) {
    console.log('9 is also a cool number.')
} else {
    console.log("Number is not 23 or 7 or 9.")
}

if (favoriteNumber !== 321) {
    console.log('Why not 321?')
}
*/

//////////////////////////////////////////////////////////////////////////
//Boolean Logic and Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);// And condition
console.log(hasDriversLicense || hasGoodVision);// Or condition
console.log(!hasDriversLicense); // not condition

// if (hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive.")
// } else {
//     console.log("Someone else should drive...")
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive.")
} else {
    console.log("Someone else should drive...")
}*/

//////////////////////////
/*
//PRACTICE: Type Conversion and Coercion

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 114 + 9 - 6 = 1143

//PRACTICE: Equality Operators: == vs. ===
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'))

if (numNeighbors === 1) {
    console.log('Only 1 border!')
} else if (numNeighbors > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No borders!')
}
*/

//////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #3
/*
//1) Calculate the average score for each team
// const averageDolphins =  (96 + 108 + 89) / 3;
// const averageKoalas =  (88 + 91 + 110) / 3;

//Bonus 1:
// const averageDolphins =  (97 + 112 + 101) / 3;
// const averageKoalas =  (109 + 95 + 123) / 3;

//Bonus 2:
// const averageDolphins =  (97 + 112 + 101) / 3;
// const averageKoalas =  (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas)


//2) Compare the team's average scores to determine the winner and print the result to the console.
//Bonus 1: Include a requirement for a minimum score of 100. The team only wins if they have a higher score and it's greater than or equal to 100.
//Bonus 2: The minimun score also applies to the draw. The team's scores must be equal and be greater than or equal to 100. Otherwise, there is no winner.
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`The Dolphins win the competition with and average score of ${averageDolphins}!`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100){
    console.log(`The Koalas win the competition with and average score of ${averageKoalas}!`);
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log(`It's a draw!`);
} else {
    console.log(`No team won the competition 😔`);
};
*/

//////////////////////////////////////////////////////////////////////////
//The switch Statement

//Designed as an equality operator
//Becoming less used

/*
const day = "monday";

switch(day) {
    case "monday": //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case "tuesday":
        console.log('Prepare theory videos');
        break;
    case "wednesday":
    case "thursday":
        console.log('Write code examples');
        break;
    case "friday":
        console.log('Record videos');
        break;
    case "saturday":
    case "sunday":
        console.log('Enjoy the weekend 🤩')
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if ( day === 'tuesday') {
    console.log('Prepare coding videos');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if (day === "friday"){
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend 🤩');
} else {
    console.log('Not a valid day!')
}
*/

//////////////////////////////////////////////////////////////////////////
//Statements and Expressions

//An expression is a peice of code that produces a value
//These are all expressions
// 3 + 4
// 1991
// true && false && !false

//Statements is a bigger piece of code that is executed but does not produce a value.

//This satement declares a variable, but does not produce a value. It performs actions but does not produce a value.
// if (23 > 10){ // if else statements are statement since they don't produce values. It performs actions.
//     const string = '23 is bigger'; //the string itself is a statement
// }

// const me = "Julian"

// console.log(`I'm ${2037 - 1991} years old ${me}`)

//////////////////////////////////////////////////////////////////////////
//The Conditional Ternary Operator

// const age = 23;

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)

// const bill = 430;
// const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

// console.log(tip);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip} `);
