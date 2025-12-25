const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const resetButton = document.getElementById("reload");

const Player = document.getElementById("Player");
const Com = document.getElementById("Com");
const moves = document.getElementById("movesleft");
const results = document.getElementById("result");

let playerScore = 0;
let comScore = 0;
let total = 5;

const turn = (choice) => {
  const computerChoice = computerChoicer();

  winnerCheck(choice, computerChoice);
};

const decrementTotalAttemp = () => {
  total -= 1;
};

const buttonDisable = () => {
  resetButton.style.display = "block";
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
};

const buttonEnable = () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};

const winnerCheck = (choice, computerChoice) => {
  if (choice === computerChoice) {
    Player.innerHTML = `Tie ${playerScore}`;
    Com.innerHTML = `Tie ${comScore}`;
  }

  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")
  ) {
    playerScore += 1;
    Player.innerHTML = `Win ${playerScore}`;
    Com.innerHTML = comScore;
  }

  if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "rock") ||
    (choice === "paper" && computerChoice === "scissors")
  ) {
    comScore += 1;
    Player.innerHTML = playerScore;
    Com.innerHTML = `Win ${comScore}`;
  }

  if (total === 0 && playerScore > comScore) {
    results.innerHTML = "Game over! Player is the overall winner!";
    buttonDisable();
  }

  if (total === 0 && comScore > playerScore) {
    results.innerHTML = "Game over! Computer is the overall winner!";
    buttonDisable();
  }

  if (total === 0 && comScore === playerScore) {
    results.innerHTML = "Game over! It's a tie!";
    buttonDisable();
  }

  moves.innerHTML = `Moves Left: ${total}`;
  decrementTotalAttemp();
};

const resetGame = () => {
  playerScore = 0;
  comScore = 0;
  total = 5;
  buttonEnable();
  moves.innerHTML = `Moves Left: ${total}`;
  Player = playerScore;
  Com.innerHTML = comScore;
  results.innerHTML = "";
  resetButton.style.display = "none";
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};
