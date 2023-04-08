const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
};

// Define two objects for two players. Each player has name and getHand() properties.
const player1 = { name: 'Player 1', getHand: getHand };
const player2 = { name: 'Player 2', getHand: getHand };
let playUntil = 3
let player1Score = 0
let player2Score = 0

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
function playRound(player1, player2) {
    const player1Hand = player1.getHand();
    const player2Hand = player2.getHand();
    let winner = null;
    console.log(player1.name + ' plays ' + player1Hand);
    console.log(player2.name + ' plays ' + player2Hand);
    if (player1Hand == player2Hand) {
        console.log(" It's a tie! ")
        console.log("")
        return winner;
    }
    else if (player1Hand == 'rock') {
        if (player2Hand == 'paper') {
            winner = player2.name;
            player2Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }
        else if (player2Hand == 'scissors') {
            winner = player1.name;
            player1Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }
    }

    else if (player1Hand == 'paper') {
        if (player2Hand == 'rock') {
            winner = player1.name;
            player1Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }
        else if (player2Hand == 'scissors') {
            winner = player2.name;
            player2Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }

    }

    else if (player1Hand == 'scissors') {
        if (player2Hand === 'rock') {
            winner = player2.name;
            player2Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }
        else if (player2Hand === 'paper') {
            winner = player1.name;
            player1Score++;
            console.log(winner + " is the winner! ");
            console.log("")
            return winner;
        }

    }

};

//playRound(player1, player2);

function playGame(player1, player2, playUntil) {
    while (playUntil > player1Score &&  playUntil > player2Score ) {
        playRound(player1, player2)
        console.log("Player1 Score " + player1Score + " Player2 Score "  + player2Score);
    }

    if (player1Score > player2Score) {
        console.log(player1.name + " wins!");
        return player1;
    }
    else {
        console.log(player2.name + " wins!");
        return player2;
    }
};

playGame(player1, player2, playUntil);
console.log()











// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)






// app.js

// Complete logic of game inside this function
