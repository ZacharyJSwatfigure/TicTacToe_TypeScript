var turn = false;
var currentTurn = document.getElementsByClassName("currentTurn");
var whoStarts = function () {
    var randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 1) {
        console.log(randomNum);
        return turn = false;
    }
    else {
        console.log(randomNum);
        return turn = true;
    }
};
var changeTurnBox = function () {
    console.log(currentTurn);
    if (currentTurn != null) {
        console.log(' current turn has value');
        if (turn === false) {
            currentTurn.style.setProperty('text', 'Comp Turn');
        }
    }
};
var runGame = function () {
    whoStarts();
    changeTurnBox();
};
runGame();
