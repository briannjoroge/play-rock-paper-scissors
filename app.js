const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
  console.log("You clicked ROCK!");
});

paperButton.addEventListener("click", () => {
  console.log("You clicked PAPER!");
});

scissorsButton.addEventListener("click", () => {
  console.log("You clicked SCISSORS!");
});
