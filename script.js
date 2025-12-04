const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
let playerScore = 0;
let comScore = 0;
let total = 5;
const turn = (choice) => {
  const computerChoice = computerChoicer();

  winnerCheck(choice, computerChoice);
};
const winnerCheck = (choice, computerChoice) =>{
   const Player = document.getElementById("Player")
   const Com = document.getElementById("Com")
   const moves = document.getElementById("movesleft")
   const resetButton = document.getElementById("reload");
   const results = document.getElementById("result")
    if (choice === computerChoice) {
      total -= 1;
      moves.innerHTML = `Moves Left: ${total}`;
    }
    
   if( (choice === "rock" && computerChoice === "scissors") || 
     (choice === "scissors" && computerChoice === "paper") ||
     (choice === "paper" && computerChoice === "rock")) {
      playerScore += 1;
      total -= 1;
     Player.innerHTML = playerScore;
     Com.innerHTML = comScore;
     moves.innerHTML = `Moves Left: ${total}`;
 }
  if ((choice === "rock" && computerChoice === "paper") || 
  (choice === "scissors" && computerChoice === "rock") || 
  (choice === "paper" && computerChoice === "scissors"))  {
    comScore += 1;
    total -= 1;
    Player.innerHTML = playerScore;
    Com.innerHTML = comScore;
    moves.innerHTML = `Moves Left: ${total}`;
  }
 if( total===0 && playerScore>comScore){
    const result = (document.getElementById("result").innerHTML =
      "Game over! Player is the overall winner!");
    const resetButton = document.getElementById("reload");
    resetButton.style.display = "block";
     rock.disabled = true;
     paper.disabled = true;
     scissors.disabled = true;
  }
  if( total===0 && comScore>playerScore){
    results.innerHTML ="Game over! Computer is the overall winner!";
    resetButton.style.display = "block";
     rock.disabled = true;
     paper.disabled = true;
     scissors.disabled = true;
  }
   if (total === 0 && comScore === playerScore) {
     results.innerHTML ="Game over! It's a tie!";
     resetButton.style.display = "block";
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
   }
}
const resetGame = () => {
  playerScore = 0;
  comScore = 0;
  total = 5;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  const moves = (document.getElementById("movesleft").innerHTML = `Moves Left: ${total}`); 
  const Player = (document.getElementById("Player").innerHTML = playerScore);
  const Com = (document.getElementById("Com").innerHTML = comScore);
  const result = (document.getElementById("result").innerHTML =
    "");
    const resetButton = document.getElementById("reload");
    resetButton.style.display = "none";
};
const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

