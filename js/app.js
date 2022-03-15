const linesDiv = document.getElementById("lines");
const body = document.querySelector("body");
const message = "Arvore!";

let qtdLines = 20;
let qtdSquares = 1;
let qtdTrunk = 5;
let qtdLetters = message.length;

const drawTree = () => {
  const newLine = document.createElement("div");
  newLine.classList.add("line");

  for (let i = 0; i < qtdSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    newLine.appendChild(square);
  }

  linesDiv.appendChild(newLine);
  qtdLines--;
  qtdSquares++;
};

const addMessage = () => {
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  linesDiv.appendChild(textContainer);

  let i = 0;
  setInterval(() => {
    if (qtdLetters > 0) {
      const letter = document.createElement("div");
      letter.classList.add("letter");
      letter.innerText = message[i];
      textContainer.appendChild(letter);
      i++;
      qtdLetters--;
    }
  }, 100);
};

const drawTrunk = () => {
  const newLine = document.createElement("div");
  newLine.classList.add("line");

  for (let i = 0; i < 4; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("trunk");

    newLine.appendChild(square);
  }

  linesDiv.appendChild(newLine);
  qtdTrunk--;
  if (qtdTrunk === 0) {
    addMessage();
  }
};

const addClouds = () => {
  const cloudContainer = document.createElement("div");
  cloudContainer.classList.add("x1");
  const cloudItem = document.createElement("div");
  cloudItem.classList.add("cloud");
  cloudContainer.appendChild(cloudItem);
  body.appendChild(cloudContainer);
};

setInterval(() => {
  if (qtdLines > 0) {
    drawTree();
  } else if (qtdTrunk > 0) {
    drawTrunk();
  }
}, 100);

addClouds();
