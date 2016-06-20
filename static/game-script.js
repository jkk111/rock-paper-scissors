var playerEl, opponentEl, outcomeEl;
document.addEventListener("DOMContentLoaded", function() {
  playerEl = document.getElementById("self-move");
  opponentEl = document.getElementById("opponent-move");
  outcomeEl = document.getElementById("outcome");
});

function computeOpponentMove(playerMove) {
  var move = Math.floor(Math.random() * 100) + 1;
  if(move < 34) move = "rock";
  else if(move < 67) move = "paper";
  else move = "scissors";
  updateStatus(playerMove, move);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var moves = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

function updateStatus(playerMove, opponentMove) {
  updateMoves(playerMove, opponentMove);
  if(playerMove == opponentMove) {
    setOutcome("draw");
  } else if(moves[playerMove] == opponentMove) {
    setOutcome("victory");
  } else {
    setOutcome("defeat");
  }
}

function setOutcome(outcome) {
  outcomeEl.innerHTML = outcome;
  if(outcome == "victory") {
    playerEl.classList.add("victory")
    opponentEl.classList.add("defeat")
  } else if(outcome = "defeat") {
    opponentEl.classList.add("victory")
    playerEl.classList.add("defeat")
  }
}

function updateMoves(player, opponent) {
  opponentEl.classList.remove("victory");
  opponentEl.classList.remove("defeat");
  playerEl.classList.remove("victory");
  playerEl.classList.remove("defeat");
  playerEl.innerHTML = player;
  opponentEl.innerHTML = opponent;
}
