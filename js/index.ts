let turn: boolean = false;


let currentTurn = document.getElementById('currentTurn');


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
    return turn = true;
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

  
const boxClicked = (boxPos) => {
  
  if (turn) {
    boxPos.style.backGroundColor = "yellow"
  } else if (!turn) {
    return console.log("not your turn, Goober")
  }
  
}

const runGame = () => {
  whoStarts();
  changeTurnBox();
}

runGame();