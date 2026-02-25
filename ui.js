const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (playerScore === 5 || computerScore === 5) return;
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    document.getElementById("results-display").textContent =
      `You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${result}`;
    document.getElementById("player-score").textContent = `Your current score is ${playerScore}.`;
    document.getElementById("computer-score").textContent = `Computer's current score is ${computerScore}. `;
  });
});
