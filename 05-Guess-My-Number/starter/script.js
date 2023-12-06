'use strict';

//////////////////////////////////////////////////////////////
//Selecting and Manipulating Elements using DOM Manipulation//
/*
console.log(document.querySelector('.message').textContent);

//This is DOM manipulation. We manipulated the text content of one the DOM nodes, the class element "message"
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

//Now we want to do the same with the secret number and the score
//The values of the scret number and score are stored in an element
// secret number is stores in class: number and the score is stored in class: score
//Changing the text content of the score and number using query selector
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//Here we want to get the data from the input field. We can get the data from the input field and set the data in the input field.
//This time we read the value property of the input field by using the value property

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//////////////////////////////////////////////////////////////
//Handling Click Events//

//document query selector will select the check button element
//We used the the add event listener and specify the reaction to the click event and attach an event handler
//The event handler is the function we wrote. We passed the function directly into the add event listener method
//As a first argument, we had the event that we are listening for, the click and as the second argument, we have the function value.
//We do not call the function anywhere, we only define the function and pass it into the event handler
//JS will call the function as soon as the event happens

//////////////////////////////////////////////////////////////
//Implementing Game Object//

//We need to implement when the guess is correct, when the guess is too low, and when the guess is too high
//Step 1: We need to define the secret number outside of the handler function. We only need to define the secret number once.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Step 2: Compare the secret number to the user's guess
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
    //Step 5: When the player wins the game and if they are correct, show them the correct numbre, change the page background color to green, and widen the number
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //Use a style property to change CSS. We have to specify a string when we are changing any style properties in CSS
    //Changing the background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //widening the number
    document.querySelector('.number').style.width = '30rem';
    //Step 3: Increase/Decrease the score if the guess is incorrect
    //Step 4: Game is Over once the score reaches 0

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is incorrect, if guess does not equal the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high.' : '📉 Too low.';
      displayMessage(guess > secretNumber ? '📈 Too high.' : '📉 Too low.');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high.';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //Guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low.';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  //In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restore the initial conditions of the message, number, score and guess input fields
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  //Also restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
