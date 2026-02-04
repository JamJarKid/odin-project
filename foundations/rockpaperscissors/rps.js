const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerResults = document.querySelector(".Player");
const computerResults = document.querySelector(".Computer");

playerResults.textContent = "0";
computerResults.textContent = "0";

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
  result = playRound("rock", getComputerChoice());
  switch (result[4]) {
    case "T":
      break;
    case "W":
      playerScore += 1;
      break;
    case "L":
      computerScore += 1;
      break;
  }
  playerResults.textContent = playerScore;
  computerResults.textContent = computerScore;
});

paperBtn.addEventListener("click", () => {
  result = playRound("paper", getComputerChoice());
  switch (result[4]) {
    case "T":
      break;
    case "W":
      playerScore += 1;
      break;
    case "L":
      computerScore += 1;
      break;
  }
  playerResults.textContent = playerScore;
  computerResults.textContent = computerScore;
});

scissorsBtn.addEventListener("click", () => {
  result = playRound("scissors", getComputerChoice());
  switch (result[4]) {
    case "T":
      break;
    case "W":
      playerScore += 1;
      break;
    case "L":
      computerScore += 1;
      break;
  }
  playerResults.textContent = playerScore;
  computerResults.textContent = computerScore;
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random(3) * 3);
  return options[choice];
}

function getPlayerChoice() {
  return prompt("Rock, Paper or Scissors");
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (computerChoice === playerChoice) {
    return "You Tie";
  } else if (
    (playerChoice === "rock" && computerChoice == "scissors") ||
    (playerChoice === "scissors" && computerChoice == "paper") ||
    (playerChoice === "paper" && computerChoice == "rock")
  ) {
    return `You Win ${playerChoice} Beats ${computerChoice}`;
  } else {
    return `You Lose ${computerChoice} Beats ${playerChoice}`;
  }
}

function playGame() {
  let PlayerScore = 0;
  let ComputerScore = 0;

  for (let i = 0; i < 5; ++i) {
    let result = playRound(getPlayerChoice(), getComputerChoice());

    switch (result[4]) {
      case "T":
        break;
      case "W":
        PlayerScore += 1;
        break;
      case "L":
        ComputerScore += 1;
        break;
    }
    console.log(result);
    console.log(
      `Your Score is ${PlayerScore}\nThe Computer Score is ${ComputerScore}`,
    );
  }
  if (PlayerScore > ComputerScore) {
    return "You Win";
  } else if (PlayerScore === ComputerScore) {
    return "You Tie";
  } else {
    return "You Lose";
  }
}
