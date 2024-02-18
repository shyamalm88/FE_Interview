const n = 10;
const matrixArray = [];

const ladderMap = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  78: 98,
  87: 94,
};

const snakeMap = {
  16: 6,
  46: 25,
  49: 11,
  62: 19,
  64: 60,
  74: 53,
  89: 68,
  92: 88,
  95: 75,
  99: 80,
};
const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";

function createMatrix() {
  let block = n * n + 1;
  for (let column = 1; column <= n; column++) {
    let rows = [];
    if (column % 2 === 0) {
      block = block - n;
      let value = block;
      for (let row = 1; row <= n; row++) {
        rows.push(value);
        value++;
      }
    } else {
      for (let row = 1; row <= n; row++) {
        block = block - 1;
        rows.push(block);
      }
    }
    matrixArray.push(rows);
  }
  createBoard(matrixArray);
}
function createBoard(matrixArray) {
  const board = document.querySelector(".main-board");
  let str = "";
  matrixArray.map((row) => {
    str += `
            <div class="row">`;
    row.map((block) => {
      str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ""} ${
        snakeMap[block] ? SNAKE_CLASS : ""
      } ${block === 1 ? "active" : ""} " data-value=${block}>
                      ${block}
                    </div>
                `;
    });
    str += `</div>`;
  });
  board.innerHTML = str;
}

function roll() {
  const dice = document.querySelector("img");
  dice.classList.add("shake");
  setTimeout(() => {
    dice.classList.remove("shake");
    const diceValue = Math.ceil(Math.random() * 6);
    document
      .querySelector("#dice-id")
      .setAttribute("src", `assets/dice${diceValue}.png`);
    changeCurrentPosition(diceValue);
  }, 1000);
}

function changeCurrentPosition(diceValue) {
  const activeBlock = document.querySelector(".active");
  const activeBlockValue = parseInt(activeBlock.outerText);
  let presentValue = diceValue + activeBlockValue;
  if (snakeMap[presentValue]) {
    alert(
      `Oppsss! You're at ${presentValue} & a snake has bitten you go back to ${snakeMap[presentValue]}`
    );
    presentValue = snakeMap[presentValue];
    changeActiveClass(presentValue);
  }
  if (ladderMap[presentValue]) {
    alert(
      `Yayyy! You're at ${presentValue},you got a ladder go to ${ladderMap[presentValue]}`
    );
    presentValue = ladderMap[presentValue];
    changeActiveClass(presentValue);
  }
  if (presentValue <= n * n) {
    changeActiveClass(presentValue);
  }
}

function changeActiveClass(presentValue) {
  const activeBlock = document.querySelector(".active");
  activeBlock.classList.remove("active");
  const block = document.querySelector(`[data-value = "${presentValue}"]`);
  block.classList.add("active");
}
