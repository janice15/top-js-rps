const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    document.getElementById("results-display").textContent =
      `You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${result}`;
  });
});
