const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const winner = document.getElementById("winner");
const container = document.getElementById("container");
const score
console.log(container, "container");

let playerScore = 0;
let comScore = 0;
let total = 0;
const turn = (choice) => {
  const computerChoice = computerChoicer();

  winnerCheck(choice, computerChoice);
};

const winnerCheck = (choice, computerChoice) => {
  if (choice === "rock" && computerChoice === "scissors") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Player win");
    playerScore++;
    const Player = (document.getElementById("Player").innerHTML = playerScore);
  }
  if (choice === "rock" && computerChoice === "paper") {
    const whoWins = (document.getElementById("whoWins").innerHTML = "Com win");
    comScore++;
    const Com = (document.getElementById("Com").innerHTML = comScore);
  }

  if (choice === "rock" && computerChoice === "rock") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Nobody win");
  }
  if (choice === "scissors" && computerChoice === "scissors") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Nobody win");
  }
  if (choice === "scissors" && computerChoice === "rock") {
    const whoWins = (document.getElementById("whoWins").innerHTML = "Com win");
    const Com = (document.getElementById("Com").innerHTML = comScore);
  }
  if (choice === "scissors" && computerChoice === "paper") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Player win");
    const Player = (document.getElementById("Player").innerHTML = playerScore);
  }
  if (choice === "paper" && computerChoice === "scissors") {
    const whoWins = (document.getElementById("whoWins").innerHTML = "Com win");
    comScore++;
    const Com = (document.getElementById("Com").innerHTML = comScore);
  }
  if (choice === "paper" && computerChoice === "rock") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Player win");
    playerScore++;
    const Player = (document.getElementById("Player").innerHTML = playerScore);
  }
  if (choice === "paper" && computerChoice === "paper") {
    const whoWins = (document.getElementById("whoWins").innerHTML =
      "Nobody win");
  }
  total++;
  console.log(total, "total");
  if (total === 5 && playerScore === comScore) {
    winner.innerHTML = "draw";
    clearDisplay();
    setInterval(() => {
      resetGame();
    }, 1000);
  }
  if (total === 5 && playerScore > comScore) {
    winner.innerHTML = "Winner is Player";
    clearDisplay();
    setInterval(() => {
      resetGame();
    }, 1000);
  }
  if (total === 5 && playerScore < comScore) {
    clearDisplay();
    winner.innerHTML = "Winner is Com";

    setInterval(() => {
      resetGame();
    }, 1000);
  }
};

const resetGame = () => {
  playerScore = 0;
  comScore = 0;
  total = 0;
  const Player = (document.getElementById("Player").innerHTML = playerScore);
  const Com = (document.getElementById("Com").innerHTML = comScore);
};

const clearDisplay = () => {
  container.innerHTML = "<p>game over</p>";
  whoWins.innerHTML = " ";
  score;
};
const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

// user oorin songolt oruuldag
// computer songodog
// hen ylsan esehiig shalgana
// user bolon computer onootoi bna /0/
// onoo nemne
