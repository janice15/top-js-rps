const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

const getHumanChoice = () => {
    let humanInput = prompt("Choose: Rock, Paper, or Scissors!");
    return humanInput.toUpperCase();
}
