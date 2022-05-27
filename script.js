let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

let compareGuesses = (human, computer, target) => {
  return Math.abs(target - computer) >= Math.abs(target - human);
}

let updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  } 
}

let advanceRound = () => {
  currentRoundNumber++;
}
