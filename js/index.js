var turn = false;
var currentTurn = {};
window.onload = function (currentTurn) {
    return currentTurn = document.getElementById('currentTurn');
};
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
    console.log(turn + '   turn boolean');
    console.log(currentTurn);
    if (currentTurn != null) {
        console.log(' current turn has value');
        if (turn === false) {
            console.log(currentTurn.style);
            currentTurn.style.innerHTML = "computer turn";
            return currentTurn;
        }
        else {
            currentTurn.style.backgroundColor = "green";
            return currentTurn;
        }
    }
};
var runGame = function () {
    whoStarts();
    changeTurnBox();
};
runGame();
