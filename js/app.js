// const cardsArr = document.getElementsByClassName('card');
const cardsArr = document.querySelectorAll('.card');
// console.log(cardsArr);
// const cardsArr = ["fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-bomb", "fa-paper-plane-o"];
const deck = document.querySelector('#deck');
let cardDeck = [...cardsArr];
console.log(cardDeck);
let card_value = [];
//let deck = document.querySelector('.deck');
let pickedCards = [];
let cardsShown = 0;
cardsShown = [];
let i = cardsArr.length,
  j, temp;
let match = document.getElementsByClassName('match');
match = 0;
currentTime = 0;
// let timerOn = true;
let timerOff = true;
let timerId;
restartTimer = 0;
let moves = document.getElementsByClassName('moves');
moves = 0;
// let minutes = Math.floor(time / 60);
// let seconds = time % 60;
let restart = document.getElementsByClassName('restart');
let scorePanel = document.getElementsByClassName('score-panel');
let star = [];
let stars = document.querySelectorAll('.stars');
let rating = document.querySelector('.fa-star');
let gmtime = document.getElementById('gmtime');
toggleArr = new Array();


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// Start Game
beginGame();

function beginGame() {

  timerG();
  seconds = 0, milsecs = 0, minutes = 0, moves = 0, hours = 0, score = 100;

  let shuffledCards = shuffle(cardsArr);
  deck; // to remove elements and text

  for (let i = 0; i < shuffledCards.length; i++) {
    let cardLi = document.createElement('li');
    // deck.appendChild();
    cardLi.classList.add('card[i]');
    cardLi.innerHTML = `<i class="${cardsArr[i]}"></i>`;

  }
}


function showCard(card) {
  card.classList.toggle('open');
  card.classList.toggle('show');
  card.classList.toggle('disabled');
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function displayCards() {
  deck.innerHTML = "";
  shuffle(cardDeck);
  for (card of cardDeck) {
    deck.appendChild(card);
  }
}

displayCards();


let isCardClicked = true;

// Session code

/**
 * Click event listener logic : Rodrick
 */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', e => {
    const cardPicked = e.target;

    if (isCardClicked) {
      timerOn();
      isCardClicked = false;
    }

    // If one card selected and current picked card === that one card: Do nothing
    if (cardsShown.length === 1 && cardsShown[0] === cardPicked) {
      return;
      console.log('here')
    }
    // Otherwise, flip card
    else {
      showCard(cardPicked);
      cardsShown.push(cardPicked);

      // if two cards are selected : See if they match
      if (cardsShown.length === 2) {
        isCardMatch(cardsShown[0], cardsShown[1]);
      }
    }
  })
});


//Timer
let newTimer;
let time = 0;
const timer = document.querySelector('#timer');

function timerOn() {
  newTimer = setInterval(() => {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds: seconds}`
  }, 1000);
}

// End session

let isMatch = [];

function isCardMatch(openCard, closedCard) {
  // if match
  if (openCard.innerHTML === closedCard.innerHTML) {
    openCard.classList.add("match");
    closedCard.classList.add("match");

    isMatch.push(openCard, closedCard);

    cardsShown = [];

    isGameOver();

  } else {
    setTimeout(function () {
      openCard.classList.remove('open', 'show', 'disable');
      closedCard.classList.remove('open', 'show', 'disable');
    }, 1000);
  }

  cardsShown = [];

}

newMove();

function isGameOver() {
  if (isCardMatch.length === 16) {

    endTimer();
  }
}

let movesItems = document.getElementsByClassName('moves');
moves = 0;

movesItems.innerHTML = 0;

function newMove() {
  moves++;


  starRating();

}

let starsInfo = document.getElementsByClassName('stars');
star = `<li><i class="fa fa-star"></i></li>`;
starsInfo.innerHTML = star + star + star;

function starRating() {
  //      starsInfo.innerHTML = star + star + star;
  if (moves < 4) {

  } else if (moves < 16) {
    starsInfo.innerHTML = star + star;
  } else {
    starsInfo.innerHTML = star;
  }
}

let timerInfo = document.getElementsByClassName('timer');
let startTime,
  secondsAll = 0;
timerInfo.innerHTML = secondsAll;

function addTime() {
  score--;
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  // gmtime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  // timerG();
}

function timerG() {
  // time = setTimeout(addTime, 1100);
}

function endGame() {
  if (score < 0) {
    score = 0;
  }

  function beginTime() {
    secondsAll++;
    timerInfo.innerHTML = secondsAll;
  }

  // restartTimer(currentTime);
  // seconds = 0;
  // timerText = 'seconds';
  // startTime();

}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// function rating(moves) {
//   let rating = 3;
// }
