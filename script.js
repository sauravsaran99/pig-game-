"use strict";

//box
const box_0 = document.querySelector(".box-0");
const box_1 = document.querySelector(".box-1");
const box_2 = document.querySelector(".box-2");
const box_3 = document.querySelector(".box-3");
//player score
const scoreZero = document.querySelector(".score-0");
const scoreFirst = document.querySelector(".score-1");
const scoreSecond = document.querySelector(".score-2");
const scoreThird = document.querySelector(".score-3");
//curretn box selection
const currentFirstText = document.querySelector(".current-0-text");
const currentSecondText = document.querySelector(".current-1-text");
const currentThirdText = document.querySelector(".current-2-text");
const currentForthText = document.querySelector(".current-3-text");
//btn selection
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnDice = document.querySelector(".btn-dice");
//image selection
const imageOfDice = document.querySelector(".image-2");

//Changing the value of score
scoreZero.textContent = 0;
scoreFirst.textContent = 0;
scoreSecond.textContent = 0;
scoreThird.textContent = 0;
imageOfDice.classList.add("hidden");

//Changing the value of current score
currentFirstText.textContent = 0;
currentSecondText.textContent = 0;
currentThirdText.textContent = 0;
currentForthText.textContent = 0;
//bright class
    box_0.classList.add("bright");
//Variables
let currentValue = 0;
let currentPlayer = 0;
let totalScore = [0, 0, 0, 0];
let playing = true;
//Creating function for roll dice
btnRoll.addEventListener("click", function () {
  if (playing) {
  let vlaueOfDice = Math.trunc(Math.random() * 6) + 1;
  //Targeting image
  imageOfDice.classList.remove("hidden");
  imageOfDice.src = `dice-${vlaueOfDice}.png`;

  //If else condition
  if (vlaueOfDice !== 1) {
    currentValue += vlaueOfDice;
    document.querySelector(`.current-${currentPlayer}-text`).textContent =
      currentValue;
  } else {
    currentValue = 0;
  document.querySelector(`.current-${currentPlayer}-text`).textContent =
    currentValue;
  if (currentPlayer === 0) {
    currentValue = 0;
    currentPlayer = 1;
    box_0.classList.toggle("bright");
    box_1.classList.toggle("bright");

  } else if (currentPlayer === 1) {
    currentValue = 0;
    currentPlayer = 2;
    box_1.classList.toggle("bright");
    box_2.classList.toggle("bright");
  } else if (currentPlayer === 2) {
    currentValue = 0;
    currentPlayer = 3;
    box_2.classList.toggle("bright");
    box_3.classList.toggle("bright");
  } else if (currentPlayer === 3) {
    currentValue = 0;
    currentPlayer = 0;
    box_3.classList.toggle("bright");
    box_0.classList.toggle("bright");
  }
  }
}
});

btnDice.addEventListener("click", function () {
if(playing) {
  totalScore[currentPlayer] += currentValue;
  document.querySelector(`.score-${currentPlayer}`).textContent =
    totalScore[currentPlayer];
 if (totalScore[currentPlayer] >= 20) {
  document.querySelector(`.box-${currentPlayer}`).classList.add('winner');
   playing = false;
 } else {
  currentValue = 0;
  document.querySelector(`.current-${currentPlayer}-text`).textContent =
    currentValue;
  if (currentPlayer === 0) {
    currentValue = 0;
    currentPlayer = 1;
    box_0.classList.toggle("bright");
    box_1.classList.toggle("bright");

  } else if (currentPlayer === 1) {
    currentValue = 0;
    currentPlayer = 2;
    box_1.classList.toggle("bright");
    box_2.classList.toggle("bright");
  } else if (currentPlayer === 2) {
    currentValue = 0;
    currentPlayer = 3;
    box_2.classList.toggle("bright");
    box_3.classList.toggle("bright");

  } else if (currentPlayer === 3) {
    currentValue = 0;
    currentPlayer = 0;
    box_3.classList.toggle("bright");
    box_0.classList.toggle("bright");
  }
 }
}
});

btnNew.addEventListener('click', function() {
  
  playing = true;
  currentValue = 0;
  totalScore = [0, 0, 0, 0];
  currentPlayer = 0;
  
  scoreZero.textContent = totalScore[0];
  scoreFirst.textContent = totalScore[1];
  scoreSecond.textContent = totalScore[2];
  scoreThird.textContent = totalScore[3];

  currentFirstText.textContent = currentValue;
  currentSecondText.textContent = currentValue;
  currentThirdText.textContent = currentValue;
  currentForthText.textContent = currentValue;

  box_0.classList.remove('winner');
  box_1.classList.remove('winner');
  box_2.classList.remove('winner');
  box_3.classList.remove('winner');

  box_0.classList.add("bright");
  box_1.classList.remove("bright");
  box_2.classList.remove("bright");
  box_3.classList.remove("bright");
});



  

