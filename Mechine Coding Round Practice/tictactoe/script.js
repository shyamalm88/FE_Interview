const circle_class = "o";
const x_class = "x";
const cellElements = document.querySelectorAll("[data-cell]");
const boardElement = document.getElementById("board");
let circleTurn;

const winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [5, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function checkForWin(currentClass) {
  return winning_combinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every((element) => {
    return (
      element.classList.contains(x_class) ||
      element.classList.contains(circle_class)
    );
  });
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = !circleTurn ? x_class : circle_class;
  placeMark(cell, currentClass);
  //place the mark
  if (checkForWin(currentClass)) {
    console.log(`${currentClass} is the winner`);
  } else if (isDraw()) {
    console.log("draw");
  } else {
    switchTurns();
    setBoardHoverClass();
  }
  //check for win
  //check for draw
  //switch turn
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  boardElement.classList.remove(x_class);
  boardElement.classList.remove(circle_class);
  if (circleTurn) {
    boardElement.classList.add(circle_class);
  } else {
    boardElement.classList.add(x_class);
  }
}
