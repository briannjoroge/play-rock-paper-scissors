const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const winnerDisplay = document.querySelector(".winner-display h1");

function getRandomComputerMove() {
  let moves = ["🤜🏼", "🖐🏻", "✌🏻"];
  let randomNumber = Math.floor(Math.random() * 3);
  let selectedMove = moves[randomNumber];
  return selectedMove;
}

function checkWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "Draw";
  }

  if (
    (playerMove === "🤜🏼" && computerMove === "✌🏻") ||
    (playerMove === "🖐🏻" && computerMove === "🤜🏼") ||
    (playerMove === "✌🏻" && computerMove === "🖐🏻")
  ) {
    return "Player Wins";
  }

  return "Computer Wins";
}

rockButton.addEventListener("click", () => {
  //   console.log("You clicked ROCK!");
  const playerMove = "🤜🏼";
  playerChoiceDisplay.textContent = "🤜🏼";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;

  const result = checkWinner(playerMove, computerMove);
  winnerDisplay.textContent = result;
});

paperButton.addEventListener("click", () => {
  //   console.log("You clicked PAPER!");
  const playerMove = "🖐🏻";
  playerChoiceDisplay.textContent = "🖐🏻";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;

  const result = checkWinner(playerMove, computerMove);
  winnerDisplay.textContent = result;
});

scissorsButton.addEventListener("click", () => {
  //   console.log("You clicked SCISSORS!");
  const playerMove = "✌🏻";
  playerChoiceDisplay.textContent = "✌🏻";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;

  const result = checkWinner(playerMove, computerMove);
  winnerDisplay.textContent = result;
});
