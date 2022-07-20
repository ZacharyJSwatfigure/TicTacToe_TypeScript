let turn: boolean = false;
const currentTurn: any = document.getElementById("currentTurn");

const whoStarts = () => {
  const randomNum: number = Math.floor(Math.random() * 2);
  if (randomNum === 1) {
    return turn = false;
  } else {
    return turn = true;
  }
}

const runGame = () => {
  whoStarts();
  if (turn === false) {

  }
}