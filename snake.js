var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var snake = [{x: 10, y: 10}];
var direction = "right";
var food = {x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20};

function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(function (segment) {
    ctx.fillRect(segment.x, segment.y, 20, 20);
  });
}

function moveSnake() {
  var head = {x: snake[0].x, y: snake[0].y};
  switch (direction) {
    case "up":
      head.y -= 20;
      break;
    case "down":
      head.y += 20;
      break;
    case "left":
      head.x -= 20;
      break;
    case "right":
      head.x += 20;
      break;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    food = {x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20};
  } else {
    snake.pop();
  }
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      direction = "left";
      break;
    case 38:
      direction = "up";
      break;
    case 39:
      direction = "right";
      break;
    case 40:
      direction = "down";
      break;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveSnake();
  drawSnake();
  drawFood();
}

setInterval(gameLoop, 100);

document.addEventListener("keydown", changeDirection);