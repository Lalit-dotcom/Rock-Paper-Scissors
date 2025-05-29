const buttonsEl = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const userScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");
let userTotalScore = 0;
let computerTotalScore = 0;

buttonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    userScoreEl.textContent = userTotalScore;
    computerScoreEl.textContent = computerTotalScore;
  });
});

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerTotalScore += 1;
    return "You Lose!! " + computerSelection + " beats " + playerSelection; 
  }
  else{
    userTotalScore += 1;
    return "You Win!! " + playerSelection + " beats " + computerSelection;
  }
}
