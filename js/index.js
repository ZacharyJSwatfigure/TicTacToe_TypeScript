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
var topLActive = null;
var topMActive = null;
var topRActive = null;
var middleLActive = null;
var middleMActive = null;
var middleRActive = null;
var bottomLActive = null;
var bottomMActive = null;
var bottomRActive = null;
var xo = document.getElementsByClassName('xo');
// 0 === false === comp turn
// 1 === true === player turn
var whoStarts = function () {
    var randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
        console.log(randomNum);
        computerTurn();
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
                    turn = true;
                    break;
                case 2:
                    topR.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = true;
                    break;
                case 3:
                    bottomL.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = true;
                    break;
                case 4:
                    bottomR.style.backgroundColor = "red";
                    turnCounter = turnCounter + 1;
                    turn = true;
                    break;
            }
        }
    }
};
var updatePosition = function () {
    if (turnCounter >= 1) {
        if (topL.style.backgroundColor != "white") {
            if (topL.style.backgroundColor === "red") {
                topLActive = false;
            }
            else if (topL.style.backgroundColor === "green") {
                topLActive = true;
            }
        }
        if (topM.style.backgroundColor != "white") {
            if (topM.style.backgroundColor === "red") {
                topMActive = false;
            }
            else if (topM.style.backgroundColor === "green") {
                topMActive = true;
            }
        }
        if (topR.style.backgroundColor != "white") {
            if (topR.style.backgroundColor === "red") {
                topMActive = false;
            }
            else if (topR.style.backgroundColor === "green") {
                topRActive = true;
            }
        }
        if (middleL.style.backgroundColor != "white") {
            if (middleL.style.backgroundColor === "red") {
                middleLActive = false;
            }
            else if (middleL.style.backgroundColor === "green") {
                middleLActive = true;
            }
        }
        if (middleM.style.backgroundColor != "white") {
            if (middleM.style.backgroundColor === "red") {
                middleMActive = false;
            }
            else if (middleM.style.backgroundColor === "green") {
                middleMActive = true;
            }
        }
        if (middleR.style.backgroundColor != "white") {
            if (middleR.style.backgroundColor === "red") {
                middleRActive = false;
            }
            else if (middleR.style.backgroundColor === "green") {
                middleRActive = true;
            }
        }
        if (bottomL.style.backgroundColor != "white") {
            if (bottomL.style.backgroundColor === "red") {
                bottomLActive = false;
            }
            else if (bottomL.style.backgroundColor === "green") {
                bottomLActive = true;
            }
        }
        if (bottomM.style.backgroundColor != "white") {
            if (bottomM.style.backgroundColor === "red") {
                bottomMActive = false;
            }
            else if (bottomM.style.backgroundColor === "green") {
                bottomMActive = true;
            }
        }
        if (bottomR.style.backgroundColor != "white") {
            if (bottomR.style.backgroundColor === "red") {
                bottomRActive = false;
            }
            else if (bottomR.style.backgroundColor === "green") {
                bottomRActive = true;
            }
        }
        else {
            return console.log("gameover? 152");
        }
    }
};
var noCorners = function () {
    console.log("noCorners");
};
var computerTurn = function () {
    if (turnCounter === 0) {
        computerTurnOne();
    }
    else if (turnCounter > 0) {
        updatePosition();
        if (!topLActive) {
            if (!topRActive) {
                if (!bottomLActive) {
                    if (!bottomRActive) {
                        noCorners();
                    }
                    else {
                        bottomR.style.backgroundColor = "red";
                        bottomRActive = false;
                        turn = true;
                        return;
                    }
                }
                else {
                    bottomL.style.backgroundColor = "red";
                    bottomRActive = false;
                    turn = true;
                    return;
                }
            }
            else {
                topR.style.backgroundColor = "red";
                topLActive = false;
                turn = true;
                return;
            }
        }
        else {
            topL.style.backgroundColor = "red";
            topLActive = false;
            turn = true;
            return;
        }
    }
};
//start writing here
var boxClicked = function (boxPos) {
    if (turn) {
        if (boxPos.style.backgroundColor != "red" && boxPos.style.backgroundColor != "green") {
            boxPos.style.backgroundColor = "green";
            turnCounter += 1;
            computerTurn();
            return turn = false;
        }
        else {
            return console.log("error. section already selected");
        }
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
