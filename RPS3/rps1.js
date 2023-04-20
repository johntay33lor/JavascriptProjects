// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a random hand from the array
function getHand() {
  return hands[Math.floor(Math.random() * hands.length)];
}

// Define two objects for two players. Each player has name, getHand() and score properties.
const player1 = { name: 'Player 1', getHand: getHand, score: 0 };
const player2 = { name: 'Player 2', getHand: getHand, score: 0 };


// Define a function called playRound() that takes two player objects as arguments
function playRound(player1, player2) {
  // Get hands from each player
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();

  // Displaying the hands played by each player
  console.log(player1.name + ' plays ' + player1Hand);
  console.log(player2.name + ' plays ' + player2Hand);

  let roundWinner = null;

  // Check which player wins the round and update their score
  if (player1Hand === player2Hand) {
    roundWinner = "It's a tie this round!";
  } else if (
    (player1Hand === 'rock' && player2Hand === 'scissors') ||
    (player1Hand === 'scissors' && player2Hand === 'paper') ||
    (player1Hand === 'paper' && player2Hand === 'rock')
  ) {
    player1.score++;
    roundWinner = player1.name + ' wins the round!';
  } else {
    player2.score++;
    roundWinner = player2.name + ' wins the round!';
  }

  // Update the UI with DOM elements: the round winner and scores
  document.getElementById('round-winner').textContent = roundWinner;
  document.getElementById('player1-score').textContent = player1.score;
  document.getElementById('player2-score').textContent = player2.score;
}

// Define a function called playGame() that plays multiple rounds of Rock-Paper-Scissors
function playGame(numRounds) {
  console.log('Starting a new game!');
  
  // Reset player scores
  player1.score = 0;
  player2.score = 0;

  // Play the specified number of rounds
  for (let i = 1; i <= numRounds; i++) {
    console.log('Round ' + i + ':');
    playRound(player1, player2);
    if (player1.score === 3 || player2.score === 3) {
      break;
    }
  }

  // Display the winner of the game
  let gameWinner = null;

  if (player1.score === player2.score) {
    gameWinner = "It's a tie game!";
  } else if (player1.score > player2.score) {
    gameWinner = player1.name + ' wins the game!';
  } else {
    gameWinner = player2.name + ' wins the game!';
  }

  // Update the UI with the game winner
  document.getElementById('game-winner').textContent = gameWinner;
}
document.getElementById('rock').addEventListener('click', () => {
  playRound(player1, player2)
});
  document.getElementById('paper').addEventListener('click', () => {
    playRound(player1, player2);
  })
  document.getElementById('scissors').addEventListener('click', () => {
    playRound(player1, player2);
  })