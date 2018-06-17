let cardImages = ['icons/anchor.jpg','icons/paper-plane.jpg','icons/bicycle.jpg','icons/bolt.jpg','icons/cube.jpg','icons/gem.jpg','icons/leaf.jpg','icons/bomb.jpg'];
console.log(cardImages);

function beginGame() {
  // To clear gameboard
  document.getElementById('gameboard').innerHTML = '';
  // To create gameboard
  for (i = 0; i <= ((cardImages.length*2)-1); i++) {
    displayCard(i);
  }
}

function displayCard(i) {
  console.log(i);
}

beginGame();
