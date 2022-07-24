var turn = false;
var currentTurn = document.getElementById('currentTurn');
var turnCounter = 0;
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
        turn = true;
        computerTurn();
        return;
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
var computerTurnOne = function () {
    if (turn) {
        console.log("turns error 49");
    }
    else {
        if (turnCounter === 0) {
            var randomNum = Math.floor(Math.random() * 4);
            switch (randomNum) {
                case 1:
                    topL.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = false;
                    break;
                case 2:
                    topR.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = false;
                    break;
                case 3:
                    bottomL.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = false;
                    break;
                case 4:
                    bottomR.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = false;
                    break;
            }
        }
    }
};
var computerTurn = function () {
    if (turnCounter === 0) {
        computerTurnOne();
    }
    if (turnCounter >= 1) {
    }
};
var boxClicked = function (boxPos) {
    if (turn) {
        boxPos.style.backgroundColor = "green";
        turnCounter += 1;
        turn = false;
        return computerTurn();
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
