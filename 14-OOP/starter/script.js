'use strict';

/////////////////Constructor Functions and the new Operator/////////////////////////////
/*
const Person = function (firstName, birthYear) {
  // console.log(this); //result: Person {}
  //Instance properties: will be available on all the instances that are created through this constructor function
  this.firstName = firstName;
  this.birthYear = birthYear;

  //NEVER create methods inside a constructor function. NEVER DO THIS!
  // this.calcAge = function (){
  //     console.log(2037 - this.birthYear);
  // }
};

//This calls person function using the new operator
const jonas = new Person('Jonas', 1991); //jonas is an instance of person
// console.log(jonas); //result: Person {firstName: 'Jonas', birthYear: 1991}

//The construuctor function performs these steps:
//Step 1: New enpty object is created
//Step 2: the function is called, this keyword is pointing to a new empty empty object (this = {})
//Step 3: New empty object is linked to a prototype
//Step 4: Object that was created is automatically returned

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack); //result: Person {firstName: 'Matilda', birthYear: 2018}, Person {firstName: 'Jack', birthYear: 1975}

// console.log(jonas instanceof Person); //result: true
// console.log(jay instanceof Person); //result: false since jay is not defined

Person.hey = function () {
  console.log('Hey there 👋🏽');
  console.log(this);
};

Person.hey();
// jonas.hey(); //result: not a function because it is not saved to the .prototype and not available in the jonas object
*/

///////////////////////////////////////Prototype/////////////////////////////////////////////////////
/*
//Every function in JS automatically has a property called "prototype" including constructor functions

//Every object created by a constructor function will have access to all methods and properties that we define on the constructors prototype property
//prototype property of the constructor function: Person.prototype (constructorFunction.prototypeProperty)
// console.log(Person.prototype); //result: {constructor: <f>}

//Only one copy of the function exists, BUT all the objects created using the constructor function have access to this method.
//This keyword is set to the object that is CALLING the method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge(); //result: 46
// matilda.calcAge(); //result: 20
// jack.calcAge(); //result: 62

//This is how we implement prototypal inheritance

// console.log(jonas.__proto__); //result: Person {calcAge: <f>, constructor: <f>}
//Person.prototype is the prototype of all the objects created using the constructor function, but NOT the constructor function itself.
// console.log(jonas.__proto__ === Person.prototype); //result: true
//Person.prototype is the prototype of jonas
// console.log(Person.prototype.isPrototypeOf(jonas)); //result: true
//Person.prototype is the prototype of matilda
// console.log(Person.prototype.isPrototypeOf(matilda)); //result: true
//Person.prototype is is NOT the prototype of Person but only the objects created BY the Person constructor function
// console.log(Person.prototype.isPrototypeOf(Person)); //result: false
//It should be called the prototype of LINKED objects since it's only the prototype of the linked objects and not the object itself

//The constructor function performs these steps:
//Step 1: New enpty object is created
//Step 2: the function is called, this keyword is pointing to a new empty empty object (this = {})
//Step 3: New empty object is linked to a prototype -- creates the __proto__ property. It sets the prototype of the object to the prototype property of the constructor function
//this is how it knows it's connected to the object
//Step 4: Object that was created is automatically returned

//Not a property that is directly in the object, but is in the prototype property of Person
Person.prototype.species = 'Homosapiens';

// console.log(jonas.species, matilda.species); //result: Homosapiens, Homosapiens
//Properties saved to the prototype ARE NOT a property that is directly in the object, but is in the prototype property of Person
// console.log(jonas.hasOwnProperty('firstName')); //result: true because this is a property that is saved directly to the object
// console.log(jonas.hasOwnProperty('species')); //result: false because this is a property that is saved to the objects PROTOTYPE
*/

/////////////////////////////////Prototypal Inheritance on Built-In Objects////////////////////////////////////////////
/*
// console.log(jonas.__proto__); //result: Person {species: 'Homosapiens', calcAge: <f>, constructor: <f>}
// console.log(jonas.__proto__.__proto__); //result: {constructor: <f>, Object.prototype methods}
// console.log(jonas.__proto__.__proto__.__proto__); //result: null because Object.prototype is the the top of the prototype chain
// console.dir(Person.prototype.constructor); //result: <f> Person (firstName, birthYear)

// const arr = [3, 6, 6, 9, 3, 5, 4, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__); //result: array methods
// console.log(arr.__proto__ === Array.prototype); //result: true
// console.log(arr.__proto__.__proto__); //result: {constructor: <f>, Object.prototype methods} will show all the array methods

//Prototypal inheritance is a way to reuse code
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); //result: [3, 6, 9, 5, 4]

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);
*/

//////////////////Coding Challenge #1///////////////
/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀


function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerated to ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `${this.make} hit the brakes and the speed is now ${this.speed}km/h`
  );
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
*/

////////////////////////////////////////////////////////////ES6 Classes////////////////////////////////////////////
////////////////////////////////////////////////////////////Static Methods////////////////////////////////////////////
/*
//Syntactic sugar
//Classes are a special type of function, but they are still functions

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods
  //methods will added to the .prototype property of the PersonCl
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋🏽');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); //result: Person {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); //result: 41
console.log(jessica.__proto__ === PersonCl.prototype); // result: true
console.log(jessica.age); //result: 41

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are also first-class citizens - they can be passed into functions and returned from functions
//3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
*/
////////////////////////////////////////////////////////////Setters & Getters////////////////////////////////////////////
/*
//Setters and Getters are accessor properties
//They are functions that Set and Get a value but they look like regular properties

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
////////////////////////////////////////////////Object.create(method)////////////////////////////////////////////
//We can use Object.create to manually set the prototype of an object to any other object that we want
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // result: true

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
sara.calcAge();
*/

//////////////////Coding Challenge #2///////////////
/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} hit the brakes and the speed is now ${this.speed}km/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS); //result: 75
ford.accelerate(); //result: Ford accelerated to 130km/h
ford.accelerate(); //result: Ford accelerated to 140km/h
ford.brake(); //result: Ford hit the brakes and the speed is now 135km/h
ford.speedUS = 50;
console.log(ford); //result: CarCl {make: 'Ford', speed: 80}
*/

///////////////Inheritance between "Classes": Constructor Functions////////////////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
