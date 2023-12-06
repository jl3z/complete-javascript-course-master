'use strict';

///////////////////////////////////////Scoping in Practice///////////////////////////////////////

/*
//This calcAge function is defined in the Global Scope and it creates it's own scope
function calcAge(birthyear) {
  const age = 2037 - birthyear;
  //firstName is a global variable in the global scope
  //   console.log(firstName);

  function printAge() {
    //JS engine will look for the age and birthYear variable in the current scope, the printAge function, if it is not there it will also look in the parent scope, the calcAge function. firstName is in the global scope, which can be accessed in the calcAge and printAge functions.
    let output = `${firstName}, you are the ${age} born in ${birthyear}`;
    console.log(output);

    //we are creating a new block and with that a block scope. birthYear and firstName are in the parent scope
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;

      //What if define a const or let variable in the current scope that is the same name as a const or let variable in the global scope?
      //Creating a new variable with the same name as a variable in the outer scope
      const firstName = 'Steven';

      //Reassigning the outer scope's variable
      output = 'New Output!';

      const string = `Oh, and your're a millenial, ${firstName}`; // result: 'Oh, and your're a millenial, Steven' because const firstName is defined  in the current scope as Steven. JS will look at the current scope first. But this is a completely different variable from the one defined in the global scope.
      console.log(string);

      function add(a, b) {
        return a + b;
      }
    }
    //we cannot access the string variable outside of the if block scope because const and let variables are block scope. It's only available in the block because it is a const variable
    //console.log(sting); //this will result in undefined
    console.log(millenial); //var variable accessible outside of the block
    //console.log(add(2, 3)); //this will result in undefined because functions are block scoped. We can only use it in the if block in strict mode
    //
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
//age and printAge variable inaccesible outside of the function where it is declared, inside calcAge function
//these will result in undefined
//console.log(age); //this will result in undefined
//console.log(printAge); //this will result in undefined
*/

///////////////////////////////////////Hoisting and TDZ in Practice///////////////////////////////////////
/*
/////Hoisting with Variables/////

//console.log(me); //undefined
//job and year are in Temporal Dead Zone if they are called before they are defined
//console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
//console.log(year); //Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

/////Hoisting with Functions/////

//function declaration will run because it is hoisted. We can call a function declaration before it is defined
console.log(addDecl(2, 3)); //5

//function expression will not run because it is a const variable, const and let variables are in the temporal dead zone if they are called before they are declared
// console.log(addExpr(2, 3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization

//Arrow function declared with a var will not run before it is defined because it is undefined
// console.log(addArrow); //Undefined
// console.log(addArrow(2, 3)); //Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

/////Example/////

if (!numProducts) deleteShoppingCart(); //!numProducts = 0 and 0 is a falsey value because numProducts is undefined and undefined is a falsey value

var numProducts = 10; // if we declare the var numProducts variable after we call it, it is undefined or 0 or a falsey value

function deleteShoppingCart() {
  console.log('All products deleted'); // this will log to the console because var is undefined
}

//Declare variables at the top of each scope
//Use const and let, const is best practice and only use let when absolutely necessary. DO NOT USE var TO DECLARE VARIABLES
//ALWAYS declare all the functions BEFORE CALLING functions and only use them after they are declared, even when using function declarations, even if they are hoisted.

var x = 1; //var variables create a property on the global window object
let y = 2;
const z = 3;

console.log(x === window.x); //true because var x will create a property on the global window object
console.log(y === window.y); //false because let y will not create a property on the global window object
console.log(z === window.z); //false because const z will not create a property on the global window object
*/

///////////////////////////////////////The this Keyword in Practice///////////////////////////////////////

/*

console.log(this); // The this keyword in the Global Scope is the Window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined because this inside of a regular function call is undefined because we are in strict mode. Otherwise, it would be the window object. The function is not attached to any object.
};

calcAge(1991);

const calcAgeArrow = birthYear => console.log(2037 - birthYear);
console.log(this); // window because arrow functions do not get their own this keyword and instead call the lexical this keyword, or the keyword of its parent function, in this case, the global scope. The global scope is a function. Window is the this keyword in the global scope.

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    //here we wrote the calcAge method inside the jonas object.
    console.log(this); //calls the jonas object. When we have a method call, the this keyword inside of the method will be the object that is calling the method.
    console.log(2037 - this.year); //we can use that to calculate the age based on the data that is in this object. We don't have to pass in the data again. We can use the this keyword to reference the object.
  },
};
jonas.calcAge(); // jonas object is the owner of the method. therefore inside of calcAge, this is jonas.

//The this keyword is pointing to the object that is calling the method. It will not simply point to the object in which we wrote the method, but it will point to the object that is CALLING the method. We can use the function in another object.

//A method is a function and a function is just a value so we can assign it to another object.

//Method Borrowing//

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // here we are copying the method calcAge from the jonas object into the matilda object. It is now in the matilda object. We don't have to duplicate the function, we can borrow it from another object.

matilda.calcAge(); //We care calling the matilda object. The this keyword in this method call is pointing to the matilda object, since it is the one we are CALLING.

//THE THIS KEYWORD ALWAYS POINTS TO THE OBJECT THAT IS CALLING THE METHOD//
//NOT WHERE THE METHOD WAS WRITTEN BUT WHERE THE METHOD IS BEING CALLED//

const f = jonas.calcAge; //copying the function into a new variable but not calling it. f is just a function expression here. 
//we can copy a function into vew variable because a function is just a value

console.log(f); //it is the calcAge function
f(); //undefined because f is now just a regular function call and it is undefinied since this keyword on a regular function is undefined. The function is not actually attached to any object. There is no owner of the f function.

*/

///////////////////////////////////////The this Keyword in Practice: Regular Functions vs. Arrow functions///////////////////////////////////////

/*

const jonas = {
  //this is not a code block, this is an object literal. It is in the global scope.
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    ///////////Function INSIDE of a method///////
    ///PROBLEM: A regular function call has the this keyword set to undefined///
    const isMillenial = function () {
        //console.log(this); //undefined
        //console.log(this.year >= 1981 && this.year <= 1996); // this keyword is undefined because isMillenial(); is just a regular function call even if it is inside of a method. this keyword in regular function call is undefined. It's just as if it was a function outside of the method.  
      };

    ///SOLUTION 1 function inside of a method: Using a variable to point to the parent function///
    
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self); //self is not referenced here but JS will look in the parent scope, calcAge where this is defined as the this keyword
    //   console.log(self.year >= 1981 && self.year <= 1996);
    };

    ///SOLUTION 2 function inside of a method: Using an Arrow Function where this keyword points to the parent function///
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }; //works because it uses the this keyword from it's parent scope, the calcAge method where the this keyword is the jonas object. It inherits the this keyword from its parent scope
    isMillenial(); //
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`); //window.firstName = undefined
    console.log(this); //will point to the global scope, window object, even though the arrow function was called by the jonas object
  },
};

jonas.greet(); //will log 'Hey undefined' because an arrow function does not get its own keyword, it will use the this keyword from its surroundings or parent scope, in this case the global scope, the window object.
jonas.calcAge();

console.log(this.firstName); //undefined because firstName is undefined in the Window object When we try to access a property that doesn't exist in the object, the result is undefined. It's not an error. The property just isn't defined in that object, it's not necessarily an error. The property simply doesn't exist.

//This is a reason why we don't use var to declare variables because it declares them in the global scope, window object.

//////NEVER USE ARROW FUNCTIONS AS A METHOD//////
//////ALWAYS USE FUNCTION EXPRESSIONS AS A METHOD////

///////////Arguments Keyword///////

//Arguments keyword can be called in a function expression or declarations
const addExpr = function (a, b) {
  console.log(arguments); // Printing the keyword to the console will log an array with the arguments we passed through when calling the function
  //useful for when we need a function to accept more parameters than we specified. BUT We have more modern ways of dealing with multiple parameters in a function
  return a + b;
};

addExpr(2, 5); //calling the function with two parameters
addExpr(2, 5, 8, 12); //we can add more arguments than we specified in the parameter.

//Arguments keyword does NOT exist in an arrow function//
var addArrow = (a, b) => {
  console.log(arguments); // error: arguments is not defined
  return a + b;
};

addArrow(2, 5, 8, 12);

*/

///////////////////////////////////////Primitives vs. Objects(Primitives vs Reference Types)///////////////////////////////////////

//Primitive values are stored in the global scope, which is in the call stack. So the primitive variables are stored in the call stack.
let age = 30; //An identifieer will be created with the name 'age' that is stored in the memory address in the global scope which holds the value of 30.

let oldAge = age; // At this point in the code, age is 30. JS reads line by line. Points to the address where the variable 'age' is located. Value at a memory address is immutable (cannot change)

age = 31; // The identifier 'age' will be moved to a new address in the memory. The value of age in the new address is 31.
console.log(age); // 31
console.log(oldAge); // 30 because when we defined oldAge, at that point in the code, age was 30.

//Objects are reference types and it is stored in the heap

//Value of the reference types are stored in the heap with a memory address and the value itself, the key:value pairs of the object
const me = {
  //'me' identifier points to a memory address created in the call stack, NOT the memory address created in the heap.
  //The memory address of the identifier has a value of the memory address stored in the heap. The value in the call stack is referenceing the address in the heap which holds the me object.
  name: 'Jonas',
  age: 30,
};

//The heap is an almost unlimited memory pool

const friend = me;
//When creating a variable trying to copy an object, we are simply creating a new variable that points to the EXACT same object. //
//'friend' identifier points to the same memory address as the 'me' identifier, that address contains the reference which points the object itself that is in the heap
//the 'friend' object is the exact same as the 'me' object

friend.age = 27; // we are changing the value of the referenced object in the heap, not the not the address stored in the call stack.

console.log('Friend:', friend); // {name: 'Jonas', age: 27}
console.log('Me:', me); // {name: 'Jonas', age: 27}
//Even though we didn't change me.age directly, when we changed friend.age, it changed the value referenced in the heap. me and friend are referencing the same object in the heap. me and friend point to the same object in the memory heap. They are two different identifiers pointing to the exact same value. That value is the memory address that points to the reference in the memory heap.

///////////////////////////////////////Primitives vs. Objects in Practice///////////////////////////////////////

/////Primitive Types/////

let lastName = 'Williams'; //Saved to its own peice of memory in the stack
let oldlastName = lastName;
lastName = 'Davis';

console.log(lastName, oldlastName);

/////Reference Types/////

//An object, a reference value, is stored in the heap. The call stack will keep a reference to the memory position at which the object is stored in the heap.
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//Creating a variable and assigning it to an object is only copying the reference to the object.
const marriedJessica = jessica;
//This is NOT creating a new object and storing it in the heap. It is just pointing to the same exact 'jessica' object. It's a different name for the same thing.

marriedJessica.lastName = 'Davis'; //Changing a property in either the 'jessica' or 'marriedJessica' object will change it for both 'jessica' and 'marriedJessica' because they are referencing the same exact object in the heap.
//What needs to be constant is the value in the call stack. Here we are only changing the underlying object stored in the heap, which is okay to change.

//They are not two different objects. marriedJessica is just referencing jessica. lastName changes for both.
console.log('Before marriage:', jessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('After marriage:', marriedJessica); //{firstName: 'Jessica', lastName: 'Davis', age: 27}

//marriedJessica = {}; // Assising a new object is completely different from just changing a property of an onject. This not allowed because this will be stored in a different position in the call stack memory. The reference to the position in memory will have to change in the variable. We cannot change that value in the stack if it is a constant.

////////////Copying Objects////////////

///////What if we want to copy the object so that we can manipulate it without changing other object?/////

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], //Arrays are objects
};

//Using a function Object.assign, we can merge two objects and return a new one

//This will merge an empty new object with 'jessica2'. It will create a brand new object where all the properties are actually copied.
//It CANNOT copy objects within objects. It is NOT a deep clone.

const jessicaCopy = Object.assign({}, jessica2);

//If we change the lastName is jessicaCopy, it will ONLY change it in jessicaCopy, since it is a brand new object. jessicaCopy is NOT referencing jessica2. It is an entirely new object.
jessicaCopy.lastName = 'Davis';

//Preserves the original properties of the object
console.log('Before marriage:', jessica2); // {firstName: 'Jessica', lastName: 'Williams', age: 27}

//All the properties were copied to a brand new object that we called jessicaCopy, and that object can be manipulated on it's own without changing the original.
console.log('After marriage:', jessicaCopy); //{firstName: 'Jessica', lastName: 'Davis', age: 27}

//Since Object.assign CANNOT copy objects within objects, we cannot manipulate the object with object within, the array 'family'.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
//The nested object, family array, was not copied. They both have a nested object that points to the same 'family' object in the memory heap, and manipulating the nested array will change that array in both objects.
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
