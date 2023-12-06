'use strict';
//////////////////////////////////////////////////////////////
//Project #2: Modal//

//Start by selecting the elements we need and store them into variables

//Created constants for each DOM element that we are selecting to clean up and reduce code repetition.
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

//Created functions to clean up and reduce code repetition.

//DON'T REPEAT YOURSELF. Create a function for opening and closing the modal rather than repeating the code
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//If we want to use the same function for multiple event listeners, we need to specify that function as a separate function and we can pass that function as an argument for multiple event listener methods.

//We used the functionality of adding and removing classes all the time in order to change the appearance of elements on our page.
//Classes allow us to aggregate multiple CSS properties in just one container. Each class functions like a container with a lot of properties in it. Here, by addding and removing classes, we can deactivate and reactivate certain styles at the same time.

//Create a for loop too access each of the buttons.
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

//We passed the functions in as an arguments for multiple event listener methods. Here we close the modal by clicking the X or the overlay.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Using the Esc key and responding to keyboard events.
//We still need to use the event listener, Keyboard events are Global Events. They don't happen on one specific element and are usually listed on the whole document.

document.addEventListener('keydown', function (e) {
  //we only want to close the popup when Esc was pressed
  //when an event is triggerd, like event listener happens, we can access the event in the event handler function

  //How do we know what key was pressed? The information about what key was pressed will be stored in the event that is going to occur as soon as any key is pressed.
  //JS generates an object when the event occurs that contains all the information about the event
  //We can access the object in the event handler function
  //We give the function a parameter (e) and when the event occurs, JS will call the function with the event object as an argument. This works because we do not call this function as an argument ourselves, we only define.
  //Hey JS, call this function when a keydown event happens and when you do so, please pass in the event object as an argument.
  //we can log the event to the console to see exactly what key was pressed. It is an object so we can access the key:value pair. In this case, key, and 'Escape'.
  //   console.log(e);

  //Since it is a key:value pair we can call it and read the property from the object.
  //   console.log(e.key);

  //We only want to close the modal when the modal is visible, or when it does not contain the class 'hidden'.

  //if the pressed key is 'Escape' AND if the the modal does not contain the 'hidden' class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //Then close the modal with the closeModal function by calling the closeModal function with no argument
    closeModal();
  }
});
