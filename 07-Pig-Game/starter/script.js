'use strict';

//We need to select the scores by id for each player, which uses the #

//////////////Select the Elements////////////
//Select the Active Player
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//Select the Scores
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');

//Select the Current Player Score by id
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

//Select the dice element
const diceElement = document.querySelector('.dice');

//Select the button elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//////////Set the starting conditions//////////////

//Declare the variables for the initial conditions to make them available for the functions throughout the code
let scores, currentScore, activePlayer, playing;

//Create a function to set the initial conditions

const initialConditions = function () {
  //We will set the current scores of the active player into an array.
  //Score for player 1 will be in position 0 of the array and position 1 for player 2.
  scores = [0, 0];

  //The scores start at 0 for each player.
  //Define currentScore which cannot be set inside the following functions or it will reset every time we clock the roll dice button
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Reset scores to 0
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  // Reset the currentScore + change the text
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  //Select the dice element and add the class 'hidden' so we hide the dice.
  diceElement.classList.add('hidden');

  //Remove the player winner class for both players
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  //Styling for the active player reset
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

//Load the initial conditions by calling the function
initialConditions();

//Create a function to switch player
const switchPlayers = function () {
  //Reset currentScore text content back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Reset currentScore for current active player to 0
  currentScore = 0;
  //if the dice roll is a 1, switch to the other player
  //if the active player is 0 then change to 1 or else change it to 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Swap the colors for active player and inactive player by using the toggle method
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

////////////Rolling the Dice and Generate a random dice roll///////

//Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display the dice roll with image
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    // if the dice is NOT a 1, add the dice roll to current score AND display the new score
    if (dice !== 1) {
      //Display the dice roll in current for current player
      currentScore += dice;
      //select the score dynamically for the current active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to the next player
      switchPlayers();
    }
  }
});

////////////Hold the Scores and Determine if there is a winner///////
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's total score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    //e.g. scores[1] = scores[1] + currentScore
    //Display the score for the active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if total score is >= 100 and Finish the game
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      //Add the player winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //remove the active player class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //hide the dice image
      diceElement.classList.add('hidden');
    } else {
      //3.  If total score <= 100, switch to the other player
      switchPlayers();
    }
  }
});

////////////Resetting the Game///////
btnNew.addEventListener('click', initialConditions);
