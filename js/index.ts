let turn: boolean = false;
const currentTurn = document.getElementsByClassName("currentTurn");

const whoStarts = () => {
  const randomNum: number = Math.floor(Math.random() * 2);
  if (randomNum === 1) {
    console.log(randomNum)
    return turn = false;
  } else {
    console.log(randomNum)
    return turn = true;
  }
}

const changeTurnBox = () => {
  console.log(currentTurn.style)
  if (currentTurn != null) {
    console.log(' current turn has value')
    if (turn === false) {
    currentTurn.style.setProperty('text', 'Comp Turn')
    }
  }
}
  
  

const runGame = () => {
  whoStarts();
  changeTurnBox();
}

runGame();