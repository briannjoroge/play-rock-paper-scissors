const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");

function getRandomComputerMove() {
  let moves = ["🤜🏼", "🖐🏻", "✌🏻"];
  let randomNumber = Math.floor(Math.random() * 3);
  let selectedMove = moves[randomNumber];
  return selectedMove;
}

rockButton.addEventListener("click", () => {
  console.log("You clicked ROCK!");
  playerChoiceDisplay.textContent = "🤜🏼";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;
});

paperButton.addEventListener("click", () => {
  console.log("You clicked PAPER!");
  playerChoiceDisplay.textContent = "🖐🏻";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;
});

scissorsButton.addEventListener("click", () => {
  console.log("You clicked SCISSORS!");
  playerChoiceDisplay.textContent = "✌🏻";

  const computerMove = getRandomComputerMove();
  computerChoiceDisplay.textContent = computerMove;
});
