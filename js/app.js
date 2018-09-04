
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
=======
const cardImages = ["gem.png", "paper-plane.png", "bolt.png",
                  "leaf.png", "cube.png", "sun.png", "bell.png",
                  "anchor.png"];
let board = document.getElementById('gameBoard');
let messageTop = document.getElementById('message');
let cardArray = cardImages.concat(cardImages);
let cardsClicked = 0;
let previousCard = -1;
let timer = '';
let score = 100;
let msgText = '';
let seconds = 0;
let milsecs = 0;
let mins = 0;
let hours = 0;
let time;
let t;
let scorePanel = 0;
let gmtime = document.getElementById('gmtime');
let btnText = document.getElementById('gameConsole');
let restartGame = document.getElementById('gameConsole').addEventListener('click', beginGame);
toggleArr = new Array();

// Start game
beginGame();
function beginGame(){
  clearInterval(timer);
  clearTimeout(t);
  timerG();
  seconds = 0;
  milsecs = 0;
  minutes = 0;
  hours = 0;
  score = 100;
    // clear gameboard
    shuffleArray(cardArray);
    score = 0;
    board.innerHTML = "";
    // create new gameboard
    btnText.innerHTML = "Restart Game";
    msgText = "Choose card to begin Game";
    for (let i = 0; i <= ((cardArray.length)-1); i++) {
      // showImage(i);
      board.innerHTML += '<div class="col-md-3 col-xs-4 gamecard"><img id="cards'+i+'" src="img/heart.png" onclick="clickCard(\''+cardArray[i]+'\',\''+i+'\',this); return false;" class="shuffleimage"></div>';
    }
}

// function showImage(i){
//
// }

function clickCard(a,b,c) {
  // console.log(c);
  previousCard = b;
  if(cardsClicked < 2 && previousCard != b){
    toggleArr[cardsClicked] = cardArray[b];
    toggleArr[(cardsClicked + 2)] = c. id;
    cardsClicked++;
    c.src = 'img/' + cardArray[b];
      if(cardsClicked  == 2){
        if(toggleArr[0] == toggleArr[1]){
          msgText('It\'s a MATCH');
            choosenewCards();
            score = score + 1;
            // Check if Game is over
            if(cardImages <= score) {
                console.log("GAME OVER");
                endGame();
            }
        } else {
            timer = setInterval(resetCard, 3000);
            console.log('no match');
            msgText('Not a MATCH');
        }
    }
    previousCard = b;
  }
}

function messageText(message){
  clearInterval(msgText);
  messageTop.innerHTML = message;
  if(message!='Find a match'){
  msgText = setInterval(msgText, 1100, 'Find a match');
  }
}
function addTime(){
  score--;
  seconds++;
  if(seconds >= 60){
    seconds = 0;
    minutes++;
      if(minutes >= 60){
        minutes = 0;
        hours++;
      }
  }
  gmtime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timerG();
}
function timerG(){
  time = setTimeout(addTime, 1100);
}
function endGame(){
    if(score < 0) {
      score = 0;
    }
    msgText("GAME OVER<br> Thanks for Playing!<br>You Scored = "+score);
  // document.getElementById('gameConsole').innerHTML = "New Game";
    btnText.innerHTML = "Click to Play Again";
}

function choosenewCards(){
  cardsClicked = 0;
  toggleArr = [];
  previousCard = -1;
  clearInterval(timer);
}

function resetCard(){
  if(toggleArr[2]){
    document.getElementById(toggleArr[2]).src = "img/heart.png";
  }
  if(toggleArr[3]){
    document.getElementById(toggleArr[3]).src = "img/heart.png";
  }
  choosenewCards();
}

function shuffleArray(d) {
for (var c = d.length - 1; c > 0; c--) {
var b = Math.floor(Math.random() * (c + 1));
var a = d[c];
d[c] = d[b];
d[b] = a;
}
return d
};
