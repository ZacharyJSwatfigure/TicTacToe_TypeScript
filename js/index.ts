let turn: boolean = false;


let currentTurn = document.getElementById('currentTurn');

let turnCounter: number = 0;

let topL = document.getElementById('topL');
let topM = document.getElementById('topM');
let topR = document.getElementById('topR');

let middleL = document.getElementById('middleL');
let middleM = document.getElementById('middleM');
let middleR = document.getElementById('middleR');

let bottomL = document.getElementById('bottomL');
let bottomM = document.getElementById('bottomM');
let bottomR = document.getElementById('bottomR');

let xo = document.getElementsByClassName('xo');

// 0 === false === comp turn
// 1 === true === player turn

const whoStarts = () => {
  const randomNum: number = Math.floor(Math.random() * 2);
  if (randomNum === 0) {
    console.log(randomNum)
    return turn = false;
  } else {
    console.log(randomNum)
    turn = true;
    computerTurn()
  }
}

const changeTurnBox = () => {
  if (currentTurn != null) {
    if (turn === false) {
      currentTurn.style.backgroundColor = "red";
      return currentTurn;
    } else {
      currentTurn.style.backgroundColor = "green";
      return currentTurn;
    }
  }
}
const computerTurnOne = () => {
  if (turn) {
    console.log("turns error 49")
  } else {
    if (turnCounter === 0) {
      const randomNum: number = Math.floor(Math.random() * 4);
      switch(randomNum) {
        case 1:
          topL.style.backgroundColor = "red"
          turnCounter = turnCounter + 1;
          turn = false;
          break;
        case 2:
          topR.style.backgroundColor = "red"
          turnCounter = turnCounter + 1;
          turn = false;
          break;
        case 3:
          bottomL.style.backgroundColor = "red"
          turnCounter = turnCounter + 1;
          turn = false;
          break;
        case 4:
          bottomR.style.backgroundColor = "red"
          turnCounter = turnCounter + 1;
          turn = false;
          break;

      }
    }
  }
}

const computerTurn = () => {
  if (turnCounter === 0) {
    computerTurnOne();
  }
  if (turnCounter >= 1) {

  }
}

  
const boxClicked = (boxPos) => {
  
  if (turn) {
    boxPos.style.backgroundColor = "green"
    turnCounter += 1;
    turn = false;
    return computerTurn();
  } else if (!turn) {
    return console.log("not your turn, Goober")
  }
  
}

const runGame = () => {
  whoStarts();
  changeTurnBox();
}

runGame();