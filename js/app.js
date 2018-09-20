const cardsArr = document.getElementsByClassName('card');
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
let moves = document.querySelector('.moves');
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
window.onload = beginGame();
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

// Session code
/**
 * Click event listener logic : with Mentor Rodrick
 */
const cards = document.querySelectorAll('.card');
timerOff = true;
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
        addMove();
        newMove();
        checkScore();
      }
    }
  })
});
// End session

// Moves

function addMove() {
  moves++
  let movesText = document.getElementsByClassName('.moves');
  movesText.innerHTML = moves;
}

function newMove() {
  moves++;
  let movesItems = document.querySelector('.moves');
  // moves = 0;
  movesItems.innerHTML = moves;
  if (moves > 8 && moves < 16) {
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[i].style.visibility = 'collapse';
      }
    }
  } else if (moves > 17) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[i].style.visibility = 'collapse';
      }
    }
  }
}

// Stars
checkScore();

function checkScore() {
  if (moves === 12 || moves === 32) {
    removeStar();
  }
}
// Remove one star at a time
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
let time = 0;

function displayClock() {
  const timer = document.querySelector('#timer');
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (seconds < 10) {
    timer.innerHTML = `${minutes}:0${seconds}`;
  } else {
    timer.innerHTML = `${minutes}:${seconds}`;
  }
  // timer.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds: seconds}`
}
timerOff = true;
let newTimer;
timerId;

// const timer = document.querySelector('#timer');

function timerOn() {
  timerId = setInterval(() => {
    time++;
    displayClock();

    console.log('Timer is on..this is 1 second')
  }, 1000);
}
// timerOn();

function stopTimer() {
  clearInterval(timerId);
}
stopTimer();

function displayCards() {
  deck.innerHTML = "";
  shuffle(cardDeck);
  for (card of cardDeck) {
    deck.appendChild(card);
  }
}

displayCards();

let isCardClicked = true;


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

// timer for game
let timerInfo = document.getElementById('timer');
let startTime,
  secondsAll = 0;
timerInfo.innerHTML = secondsAll;

function addTime() {
  let  interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        score--;
        seconds++;
        if(seconds == 60){
            minutes++;
            second = 0;
        }
        if(minutes == 60){
            hours++;
            minutes = 0;
        }
    },1000);
}

function countMoves() {
  moves++;
  number.innerHTML = moves;
  if(moves == 1) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      beginTimer();
  }
}

// Start Game
beginGame();

function beginGame() {
  // clearInterval();
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
  card.classList.remove('disabled');
}

function getStars() {
  stars = document.querySelectorAll('.stars li');
  starCount = 0;
  for (star of stars) {
    if (star.style.display !== 'none') {
      starCount++;
    }
    console.log(starCount);
    return starCount;
  }

  function endGame() {
    if (score < 0) {
      score = 0;
    }
  }

// modal
function toggleModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hide');
  $('#stats').modal('hide')
}
toggleModal() // To Open modal
toggleModal() // To Close modal

// Modal tests
//time = 0;
displayClock();
//moves = 0;
checkScore();
// To display stats on modal
writeModalStats();
// To open modal
toggleModal();

// Modal Stats function to print stats on page
function writeModalStats() {
  const timeStat = document.getElementsByClassName('.modal_time');
  const clockTime = document.getElementById('timer').innerHTML;
  const movesStat = document.querySelector('.modal_moves');
  const starsStat = document.getElementsByClassName('.modal_stars');
  const stars = getStars();

  timeStat.innerHTML = `Time: ${clockTime}`;
  movesStat.innerHTML = `Moves: ${moves}`;
  starsStat.innerHTML = `Stars = ${stars}`;
}

  // modal eventlisteners
  document.getElementsByClassName('modal_cancel').addEventListener('click', () => {
    toggleModal();
    $('#stats').modal('toggle');
  });
  document.getElementsByClassName('modal_replay').addEventListener('click', () => {
    toggleModal();

  });
  document.querySelector('.restart').addEventListener('click', resetGame);
  document.querySelector('.modal_replay').addEventListener('click', replayGame);



// reset game
  function resetGame() {
    matched = 0;
    resetClockAndTimer();
    resetMoves();
    resetStars();
    resetCards();
    shuffledCards();
  };

  function rating(moves) {
    let rating = 3;
  }

function replayGame() {
  resetGame();
  toggleModal();
}

// reset
function resetCards() {
  const cards = document.querySelectorAll('#deck .li');
  for (let card of cards) {
    card.classList = 'card';
  }
}

function resetStars() {
  stars = 0;
  let starList = document.querySelectorAll('.stars li');
  for (star of starList) {
    star.style.display = 'inline';
  }
}

function resetClockAndTimer() {
  stopTimer();
  timerOff = true;
  time = 0;
  displayClock();
}

function resetMoves() {
  moves = 0;
  document.getElementsByClassName('.moves').innerHTML = moves;
}
// game over
function isGameOver() {
  matched += 1;
  if (matched === 8) {
    gameOver();
  }
};
// endGame
function gameOver() {
  stopTimer();
  writeModalStats();
  toggleModal();
  $('#stats').modal('show');
}

shuffleDeck();
writeModalStats();
toggleStartModal();
}
