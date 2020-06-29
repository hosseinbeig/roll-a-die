const getName = () => {
  let promptName = prompt("Please Enter Your name", "Guest");
  let newName = document.getElementById("playerName");
  if (promptName !== null) {
    newName.textContent = promptName;
  }
};

let scores,
  roundScores,
  activePlayer,
  player,
  computer,
  currentPlayerScore,
  currentComputerScore;
scores = [0, 0];
roundScores = 0;
activePlayer = 0;
player = 0;
computer = 0;
currentPlayerScore = 0;
currentComputerScore = 0;

let getDice = document.querySelector(".dice");
let getPlayer = document.querySelector(".score-0");
let getComputer = document.querySelector(".score-1");

let getCurrentPlayer = document.querySelector("#activePlayer0");
let getCurrentComputer = document.querySelector("#activePlayer1");

getCurrentPlayer.textContent = `${currentPlayerScore}`;
getCurrentComputer.textContent = `${currentComputerScore}`;
// hiding the dice
getDice.style.display = "none";

// rolling the dice
const diceHandler = () => {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  let currentPlayer = document.querySelector(`#activePlayer${activePlayer}`);
  getDice.style.display = "block";
  getDice.src = `./assets/dice-${diceNum}.png`;

  if (diceNum !== 1) {
    roundScores += diceNum;
    currentPlayer.textContent = roundScores;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScores = 0;
    getPlayer.textContent = `${player}`;
    getComputer.textContent = `${computer}`;
    document.querySelector(".playPanel0").classList.toggle("active");
    document.querySelector(".playPanel1").classList.toggle("active");
    getDice.style.display = "none";
  }
};
document.querySelector(".toggleDice").addEventListener("click", diceHandler);

// pause the score

const pauseHandler = () => {
  alert(roundScores);
};
document.querySelector(".holdScores").addEventListener("click", pauseHandler);
