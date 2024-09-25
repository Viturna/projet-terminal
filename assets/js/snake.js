let blockSize = 25;
let total_row = 17; // Nombre total de lignes
let total_col = 17;
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;
let gameWin = false;

let difficulty = 2;
let score = 0; // Nouvelle variable de score

function startSnakeGame() {
  // Initialiser le canvas et les variables
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext("2d");

  // Réinitialiser les variables
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 0;
  speedY = 0;
  snakeBody = [];
  gameOver = false;
  gameWin = false;
  score = 0; // Réinitialiser le score

  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 1000 / 10);
}

function update() {
    if (gameOver) {
        return;
    }
    if (gameWin) {
      document.getElemenxtById('board').style.display = 'none';
      document.getElementById('article-box').style.display = 'block';
      return;
  }

    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score++;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    if (snakeBody.length == difficulty) {
      gameWin = true;
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    context.font = "20px Arial";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.fillText("Score: " + score, 10, 20);

    if (snakeX < 0
        || snakeX > total_col * blockSize
        || snakeY < 0
        || snakeY > total_row * blockSize) {

        gameOver = true;
        displayGameOver();
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {

            gameOver = true;
            displayGameOver();
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * total_col) * blockSize;
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function displayGameOver() {
  context.fillStyle = "rgba(0, 0, 0, 0.7)";
  context.fillRect(0, 0, board.width, board.height);

  context.font = "50px Arial";
  context.fillStyle = "red";
  context.textAlign = "center";
  context.fillText("Game Over", board.width / 2, board.height / 2 - 20);

  let countdown = 3;
  const countdownInterval = setInterval(() => {
    context.clearRect(0, board.height / 2 + 50, board.width, 50);

    context.font = "40px Arial";
    context.fillStyle = "white";
    context.fillText(countdown, board.width / 2, board.height / 2 + 80);

    countdown--;

    if (countdown < 0) {
      clearInterval(countdownInterval);
      location.reload();
    }
  }, 1000);
}

window.startSnakeGame = startSnakeGame;
