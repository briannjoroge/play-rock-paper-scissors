const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const playerChoiceDisplay = document.getElementById("player-choice");

rockButton.addEventListener("click", () => {
  console.log("You clicked ROCK!");
  playerChoiceDisplay.textContent = "🤜🏼";
});

paperButton.addEventListener("click", () => {
  console.log("You clicked PAPER!");
  playerChoiceDisplay.textContent = "🖐🏻";
});

scissorsButton.addEventListener("click", () => {
  console.log("You clicked SCISSORS!");
  playerChoiceDisplay.textContent = "✌🏻";
});
