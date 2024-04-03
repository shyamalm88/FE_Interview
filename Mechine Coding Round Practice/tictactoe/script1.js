let board = document.querySelector("#board");
let boxes = document.querySelectorAll(".box");
let circleTurn;
let activeClass;
let crossClass = "cross";
let circleClass = "circle";

const winingCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  circleTurn = false;
  boxes.forEach((element) =>
    element.addEventListener("click", handleClick, { once: true })
  );
}

function handleClick(e) {
  let item = e.target;
  activeClass = circleTurn ? circleClass : crossClass;
  placeMark(item, activeClass);

  if (checkWin()) {
    console.log(`${circleTurn ? "O" : "X"} win`);
  } else if (checkDraw()) {
    console.log("its a draw");
  } else {
    switchTurn();
  }
}

function checkWin() {
  return winingCombinations.some((combination) => {
    return combination.every((index) => {
      return boxes[index].classList.contains(activeClass);
    });
  });
}

function checkDraw() {
  return [...boxes].every(
    (item) =>
      item.classList.contains(crossClass) ||
      item.classList.contains(circleClass)
  );
}

function switchTurn() {
  circleTurn = !circleTurn;
}

function placeMark(item, activeClass) {
  item.classList.add(activeClass);
}
