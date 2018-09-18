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
let stars = document.querySelectorAll('.stars li');
let rating = document.querySelector('.fa-star');

let matched = 0;
toggleArr = new Array();

// Start Game
beginGame();

function beginGame() {
  let shuffledCards = shuffle(cardsArr);
  deck; // to remove elements and text

  for (let i = 0; i < shuffledCards.length; i++) {
    let cardLi = document.createElement('li');
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

function newMove() {
  moves++;
  let movesItems = document.getElementsByClassName('moves');
  // moves = 0;
  movesItems.innerHTML = moves;
  if (moves > 5 && moves < 10) {
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[i].style.visibility = 'collapse';
      }
    }
  } else if (moves > 11) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[i].style.visibility = 'collapse';
      }
    }
  }
}
checkScore();

function checkScore() {
  if (moves === 6 || moves === 32) {
    hideStar();
  }
}


function hideStar() {
  let starList = document.querySelectorAll('.stars li');
  for (star of starList) {
    if (star.style.display !== 'none') {
      star.style.display = 'none';
      break;
    }
  }
}
hideStar();
hideStar();

//Timer
// let timerOff = true;
let newTimer;
// let timerId;
let time = 0;
const timer = document.querySelector('#timer');

function timerOn() {
  timerId = setInterval(() => {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds: seconds}`
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}
// stopTimer();

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
 * Click event listener logic : Mentor Rodrick
 */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', e => {
    const cardPicked = e.target;
    if (isCardClicked) {
      if (timerOff) {
        timerOn();
        isCardClicked = false;
      }
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
        newMove();
        checkScore();
      }
    }
  })
});
// End session

let isMatch = [];

function isCardMatch(openCard, closedCard) {
  let TOTAL_PAIRS = 8;
  // if match
  if (openCard.innerHTML === closedCard.innerHTML) {
    openCard.classList.add("match");
    closedCard.classList.add("match");

    isMatch.push(openCard, closedCard);

    cardsShown = [];
    matched++;

    if (matched === TOTAL_PAIRS) {
      gameEnd();
      console.log('Game Over!');
    }


  } else {
    setTimeout(function() {
      openCard.classList.remove('open', 'show', 'disable');
      closedCard.classList.remove('open', 'show', 'disable');
    }, 1000);
  }

  cardsShown = [];

}
move = 0


newMove();
isGameOver();

function isGameOver() {
  if (isCardMatch.length === 16) {

  }
}
gameOver();

function gameOver() {
  stopTimer();
  getModalStats();
  toggleModal();
}

let starsInfo = document.getElementsByClassName('stars');
star = `<li><i class="fa fa-star"></i></li>`;
starsInfo.innerHTML = star + star + star;

function starRating() {
  // starsInfo.innerHTML = star + star + star;
  if (moves < 4) {

  } else if (moves < 32) {
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
}

function endGame() {
  if (score < 0) {
    score = 0;
  }

  function beginTime() {
    secondsAll++;
    timerInfo.innerHTML = secondsAll;
  }

  let timer = document.querySeletor('#timer');
  timer.innerHTML = '0 mins 0 secs';
  clearInterval(timerId);

  // restartTimer(currentTime);
  // seconds = 0;
  // timerText = 'seconds';
  // startTime();
}

function resetGame() {
  stopTimer();
  timerOff = true;
  time = 0;
  showTime();
}

function resetTimeAndTimer() {
  stopTime();
  timerOff = true;
  time = 0;
  showTime();
}

function resetMoves() {
  moves = 0;
  document.getElementsByClassName('moves'.innerHTML) = moves;
}

function resetStars() {
  stars = 0;
  let starList = document.getElementsByClassName('.stars li');
  for (star of starList) {
    star.style.display = 'inline';
  }
}

function resetGame() {
  resetTimeAndTimer();
  resetMoves();
  resetStars();
  shuffledCards();
}

document.querySelector('.restart').addEventListener('click', resetGame);
document.querySelector('.modal_replay').addEventListener('click', resetGame);
// function rating(moves) {
//   let rating = 3;
// }
// modal
