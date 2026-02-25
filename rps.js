let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "ROCK";
  } else if (choice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
};

/*
const getHumanChoice = () => {
  let humanInput = prompt("Choose: Rock, Paper, or Scissors!");
  return humanInput.toUpperCase();
};

*/

const playRound = (humanChoice, computerChoice) => {
  currentRound += 1;
  if (
    (computerChoice === "ROCK" && humanChoice === "ROCK") ||
    (computerChoice === "SCISSORS" && humanChoice === "SCISSORS") ||
    (computerChoice === "PAPER" && humanChoice === "PAPER")
  ) {
    return "It's a tie!";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerScore += 1;
    return `${humanChoice} beats ${computerChoice}! You win!`;
  } else if (
    (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
    (computerChoice === "PAPER" && humanChoice === "ROCK") ||
    (computerChoice === "SCISSORS" && humanChoice === "PAPER")
  ) {
    computerScore += 1;
    return `${computerChoice} beats ${humanChoice}! Computer wins!`;
  }
};

const getWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return "You're the winner! Congratulations!";
  } else if (playerScore < computerScore) {
    return "Computer wins! Better luck next time!";
  } else {
    return "It's a tie! No one wins!";
  }
};
