var turn = false;
var currentTurn = document.getElementById('currentTurn');
var topL = document.getElementById('topL');
var topM = document.getElementById('topM');
var topR = document.getElementById('topR');
var middleL = document.getElementById('middleL');
var middleM = document.getElementById('middleM');
var middleR = document.getElementById('middleR');
var bottomL = document.getElementById('bottomL');
var bottomM = document.getElementById('bottomM');
var bottomR = document.getElementById('bottomR');
var xo = document.getElementsByClassName('xo');
// 0 === false === comp turn
// 1 === true === player turn
var whoStarts = function () {
    var randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
        console.log(randomNum);
        return turn = false;
    }
    else {
        console.log(randomNum);
        return turn = true;
    }
};
var changeTurnBox = function () {
    if (currentTurn != null) {
        if (turn === false) {
            currentTurn.style.backgroundColor = "red";
            return currentTurn;
        }
        else {
            currentTurn.style.backgroundColor = "green";
            return currentTurn;
        }
    }
};
var boxClicked = function (boxPos) {
    if (turn) {
        boxPos.style.backGroundColor = "yellow";
    }
    else if (!turn) {
        return console.log("not your turn, Goober");
    }
};
var runGame = function () {
    whoStarts();
    changeTurnBox();
};
runGame();
