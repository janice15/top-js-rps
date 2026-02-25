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
    currentRound += 1
    if (
      (computerChoice === "ROCK" && humanChoice === "ROCK") ||
      (computerChoice === "SCISSORS" && humanChoice === "SCISSORS") ||
      (computerChoice === "PAPER" && humanChoice === "PAPER")
    ) {
      return ("It's a tie!");
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      playerScore += 1;
      return (`${humanChoice} beats ${computerChoice}! You win!`);
    } else if (
      (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
      (computerChoice === "PAPER" && humanChoice === "ROCK") ||
      (computerChoice === "SCISSORS" && humanChoice === "PAPER")
    ) {
      computerScore += 1;
      return (`${computerChoice} beats ${humanChoice}! Computer wins!`);
      
    }
  };


/*

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }

  if (humanScore > computerScore) {
    console.log("You're the winner!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie! No one wins!");
  };
  console.log(`Your score ${humanScore}. Computer score: ${computerScore}`);
};
*/
//playGame();
