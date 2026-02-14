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

const getHumanChoice = () => {
  let humanInput = prompt("Choose: Rock, Paper, or Scissors!");
  return humanInput.toUpperCase();
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (
      (computerChoice === "ROCK" && humanChoice === "ROCK") ||
      (computerChoice === "SCISSORS" && humanChoice === "SCISSORS") ||
      (computerChoice === "PAPER" && humanChoice === "PAPER")
    ) {
      console.log("It's a tie");
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      console.log(`${humanChoice} beats ${computerChoice}! You win!`);
      humanScore += 1;
    } else if (
      (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
      (computerChoice === "PAPER" && humanChoice === "ROCK") ||
      (computerChoice === "SCISSORS" && humanChoice === "PAPER")
    ) {
      console.log(`${computerChoice} beats ${humanChoice}! Computer wins!`);
      computerScore += 1;
    }
  };

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

playGame();
