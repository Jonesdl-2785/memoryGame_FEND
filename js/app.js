//const cards = document.getElementsByClassName('card');
const cardsArr = Array.from(document.querySelectorAll('.card'));
const deck = document.querySelector('.deck');
let cardDeck = [...cardsArr];
console.log(cardDeck);
let card_value = [];
//let deck = document.querySelector('.deck');
let pickedCards = [];
let cardsShown = 0;
cardsShown = [];
let i = cardsArr.length, j, temp;
let match = document.getElementsByClassName('match');
match = 0;
currentTime = 0;
let timerOn = true;
let timerOff = true;
let timerId;
let time = 0;
let timer = document.getElementsByClassName('timer');
restartTimer = 0;
let moves = document.getElementsByClassName('moves');
moves = 0;
let minutes = Math.floor(time / 60);
let seconds = time % 60;
let restart = document.getElementsByClassName('restart');
let scorePanel = document.getElementsByClassName('score-panel');
let star = [];
let stars = document.querySelectorAll('.stars');
let rating = document.querySelector('.fa-star');

// Start Game
// function beginGame() {
//   function displayCards() {
//     deck.innerHTML = "";
//     shuffle(cardsArr);
//     for(card of cardsArr) {
//       deck.appendChild(card);
//     }
//   }
//   displayCards();
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
  for(card of cardDeck) {
    deck.appendChild(card);
  }
}
displayCards();
// Start Game
beginGame();
function beginGame() {
  let shuffledCards = shuffle(cardsArr);
  deck; // to remove elements and text

  for (let i = 0; i < shuffledCards.length; i++) {
    let cardLi = document.createElement('li');
    cardLi.classList.add('card');
    cardLi.innerHTML = `<i class="${cardsArr[i]}"></i>`;
    // deck.appendChild(card);
    addCardClick(cardsArr);
    }
  }

    let isCardClicked = true;
    function addCardClick(card) {
      deck.addEventListener('click', (e) => {
        let pickedCard = e.target;
          showCard();
        if(isCardClicked) {
          timerOn();

          isCardClicked = false;
        }
})
    let openCard = this;
    let closedCard = cardsShown[0];

    if (cardsShown === 1) {
      card.classList.add('open', 'show', 'disable');
      cardsShown.push(this);
      // check opened cards
      isCardMatch(openCard, closedCard);

    } else {
      openCard.classList.add('open', 'show', 'disable');
      cardsShown.push(this);
      }
  };

function isCardMatch(openCard, closedCard) {
  // if match
  if(openCard.innerHTML === closedCard.innerHTML) {
        openCard.classList.add("match");
        closedCard.classList.add("match");

        isMatch.push(openCard, closedCard);

        cardsShown = [];

        isGameOver();

      } else {
        setTimeout(function() {
          openCard.classList.remove('open', 'show', 'disable');
          closedCard.classList.remove('open', 'show', 'disable');
        }, 1000);
      }

      cardsShown = [];

    }

    newMove();

    function isGameOver() {
      if(isCardMatch.length === cards.length){

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
  function starRating(){
//      starsInfo.innerHTML = star + star + star;
    if(moves < 4) {

    } else if(moves < 16) {
      starsInfo.innerHTML = star + star;
    } else {
      starsInfo.innerHTML = star;
    }
  }

let timerInfo = document.getElementsByClassName('timer');
let startTime,
    secondsAll = 0;
    timerInfo.innerHTML = secondsAll;

function beginTime(){
  secondsAll++;
  timerInfo.innerHTML = secondsAll;
}

    // restartTimer(currentTime);
    // seconds = 0;
    // timerText = 'seconds';
    // startTime();


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
