'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  //Take the string, split each name into an array by the space, use .map(method) to return only the first letter of each name from the array, join the first letter of the array with no spaces
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

//console.log(createUsernames('Steven Thomas Williams')); // convert this string to username: stw
createUsernames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

////EVENT HANDLERS
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  // console.log('LOGIN');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    // console.log(currentAccount);
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;
    //empty input fields and change the focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});

////TRANSFERS
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  //the amount we want to transfer to another user
  const amount = Number(inputTransferAmount.value);
  //looking for the account that has the username we input into the transfer form
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(amount, receiverAcc);
  //check if the amount if the amount is a positive number
  //check if user has the amount they want to transfer

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer Valid');
    //Transfer funds
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements_value'));
  console.log(movementsUI.map(el => el.textContent.replace('', '')));
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////// Simple Array Methods /////////////////////////////////////////////////
/*

//Arrays have array methods. Methods are simply functions that we can call on objects. Methods are functions that are attached to objects. Arrays themselves are also objects. Array methods are simply built-in functions that are attached to all arrays that we create in JS.

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE Method
//.slice(method) can extract part of an array without changing the original array, similar to the string method.
//We can slice starting at an index
console.log(arr.slice(2)); //result: ['c', 'd', 'e']

//We can have a beginning and end parameter. The result will NOT include the end parameter.
console.log(arr.slice(2, 4)); //result: ['c', 'd'] - does NOT include element at index 4

//Can take in a negative begin parameter to slice from the end of an array
console.log(arr.slice(-2)); //result: ['d', 'e']

//-1 is always the last element of any array
console.log(arr.slice(-1)); //result: ['e']

//Starts extracting at position 1 in the array and extracts everything except the last 2 elements
console.log(arr.slice(1, -2)); //result: ['b', 'c']

//Can use the slice method to create a shallow copy of an entire array. Does NOT mutate the original array
console.log(arr.slice()); //result: ['a', 'b', 'c', 'd', 'e']
//Same as using spread operator
console.log([...arr]); //result: ['a', 'b', 'c', 'd', 'e']

//SPLICE Method
//same as slice EXCEPT that is mutates the original array
//We can delete one or more elements from an array using Splice
//console.log(arr.splice(2)); //result: ['c', 'd', 'e']

//Common usecase: removing last element of an array
arr.splice(-1); //removed last element ['e']
console.log(arr); //result: ['a', 'b', 'c', 'd']
arr.splice(1, 2); //starting with the element at index 1 ['b'], remove 2 elements from the array ['b', 'c']
//All the extracted elements are now gone from the original array
console.log(arr); //result: ['a', 'd']

//REVERSE Method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

//We can reverse an array
console.log(arr2.reverse()); //result: ['f', 'g', 'h', 'i', 'j']
//Mutates the original array
console.log(arr2); //result: ['f', 'g', 'h', 'i', 'j']

//CONCAT Method
//Concatonates arrays BUT it Does NOT mutate the original array
//first array is the one where the method is called, the second array is the parameter we pass into the concat method
const letters = arr.concat(arr2); //Calling the concat method on arr and specify the arr2 as the parameter
console.log(letters); //result: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
//Same as using spread operator
console.log([...arr, ...arr2]); //result: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//JOIN method
//The result will be a string with the separator that we specified as a parameter
console.log(letters.join(' - ')); //result: a - b - c - d - e - f - g - h - i - j


//Other Array methods from Fundamentals section
//.push() - adds elements to the end of an array
//.unshift() - adds elements to the beginning of an array

//.pop() - removes elements from the end of an array. pop will remove the last element
//.shift() - removes elements from the beginning of an array. shift will remove the first element

//.includes() - returns true if an element is in the array or false if it is not in the array
//.indexOf() - returns the index number of an element in an array

*/

//////////////////////////////////// The new ES2022 .at(method) /////////////////////////////////////////////////
/*
const arr = [23, 11, 64];

//Traditionally, if we want the array element at a certain position, we use the bracket notation
console.log(arr[0]); //result: 23
//But with the new .at(method), we can get the array element at the index number passed in as a parameter
console.log(arr.at(0)); //result: 23

//Getting the last element from an array
//Traditionally we would have to use the below to get the last element from an array
console.log(arr[arr.length - 1]); //result: 64
console.log(arr.slice(-1)[0]); //result: 64

//With the new .at(method), we can get the array last element more easily using the negative indexes
console.log(arr.at(-1)); //result: 64
console.log(arr.at(-2)); //result: 11

//When to use bracket notation vs. the .at(method)? Depends on the situation
//.at(method) more useful to get the last element of an array or to start counting from the end of an array or it is useful for method chaining
//Bracket notation useful if we want to quickly get a value from an array, like the first element

//.at(method) works on strings
console.log('jonas'.at(0)); //result: j
console.log('jonas'.at(-1)); //result: s
*/

/////////////////////////////// Looping Arrays: .forEach(method) ////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  //loops through array of arrays. this gives us access to the index or the counter
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-----FOREACH-------`);
//forEach method requires a callback function. forEach is technically a higher order function. The forEach method will call the callback function, we do not call it ourselves.

//forEach will loop over the array and in each iteration, it will execute the callback function. forEach iteration, it will pass in the current element, current index and the entire array we are looping over as an argument. We can name the parameter for the callback function anything.

//forEach parameters are always in the same order:
//1st parameter: current element, 2nd parameter: current index, 3rd parameter: entire array we are looping over
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// each iteration will call the function with each element of the array as an argument
//index 0: function(200, 0, [movements])
//index 1: function(450, 1, [movements])
//index 2: function(-400, 2, [movements])

//continue and break statements do not work in the forEach loop, so you cannot break out of the forEach loop.
*/

/////////////////////////////// .forEach(method) with Maps and Sets ////////////////////////////////////////////
/*
//.forEach(method) is available on Maps and Sets

//A Map is an array of arrays where each inner array is one entry of the Map. Each entry, inner array, contains a key and a value
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); //key is exactly the same as the value
});

//Sets do not have keys
*/

/////////////////////////////// Data Transformations: map, filter, reduce ////////////////////////////////////////////
/* 
//.map(method) will give us a brand new array that will contain the result of applying a callback function to each element of the original array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

//Using a function to solve the problem and create a new array - Functional Programming
//Modern JavaScript uses this type of functional programming

//Written using function delaration
// const movementsUSD = movements.map(function (movement) {
//   return movement * eurToUsd;
// });

//Written using the arrow function
const movementsUSD = movements.map(movement => movement * eurToUsd);
console.log(movements, movementsUSD);

//The below returns the same result EXCEPT that this loops over the original array and manually create a new array
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}
console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/////////////////////////////// The .filter(method) ////////////////////////////////////////////

//create an array of the deposits, movements that are greater than 0
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements);
// console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

/////////////////////////////// The .reduce(method) ////////////////////////////////////////////
//Boils down all elements in an array to one single value

//acc accumulates the value we want to return
//acc is the sum of all the previous values
// const balance = movements.reduce(function (acc, curr, i) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

const balance = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance);

//manual way to loop and add all elements in an array using a for...of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

//with reduce we can look for a maximum value in an array
//what is the purpose of this acc value?
//acc will keep track of the current maximum value
const maxMovement = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(maxMovement);

/////////////////////////////// Chaining Methods ////////////////////////////////////////////

const eurToUsd = 1.1;

//Pipeline
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsInUSD);

/////////////////////////////// the .find(method) ////////////////////////////////////////////

//This method will find one element of the array based on a specified condition
//It will return the first element that meets the condition
//it will only return one element, not an array
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//Set up so that only one element will satisfy the condition
*/

/////////////////////////////// the .fill(method) ////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

/////////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


function checkDogs(dogsJulia, dogsKate) {
  //create a shallow copy of dogsJulia and remove 1st and last 2 elements
  const dogsJuliaCorrect = dogsJulia.slice();
  dogsJuliaCorrect.splice(0, 1);
  dogsJuliaCorrect.splice(-2);
  //console.log(dogsJuliaCorrect);
  const juliaAndKate = dogsJuliaCorrect.concat(dogsKate);
  //console.log(juliaAndKate);
  juliaAndKate.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

console.log(`---------- TEST DATA 1 --------`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`---------- TEST DATA 2 --------`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/////////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age > 2 ? age * 4 + 16 : age * 2));
//   const over18 = humanAge.filter(age => age >= 18);
//   // const average = over18.reduce((acc, age) => acc + age, 0) / over18.length;
//   const average = over18.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age > 2 ? age * 4 + 16 : age * 2))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// console.log(calcAverageHumanAge(dogAges1));
// console.log(calcAverageHumanAge(dogAges2));
