console.log("listo para hacer el juego de pong!");

// ESTRUCTURA DE CANVAS Y CONTEXT
const canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightgray";
const ctx = canvas.getContext("2d");

// VARIABLES GLOBALES
let ballX = 30; // la posición X de la pelota en cualquier momento
let ballY = 30; // lo posición Y de la pelota en cualquier momento
let ballRadius = 20;
let ballSpeed = 5;
let ballDirectionX = 1; // 1 = hacia la derecha. -1 = hacia la izquierda
let ballDirectionY = 1; // 1 = hacia abajo. -1 = hacia arriba
let paddleX = 200;
let paddleY = canvas.height - 100;
let paddleWidth = canvas.width / 3;
let paddleHeight = 30;
let paddleSpeed = 20;
let isGameOn = true;

// FUNCIONES
const moveBall = () => {
  ballX = ballX + ballSpeed * ballDirectionX;
  ballY = ballY + ballSpeed * ballDirectionY;
};

const drawBall = () => {
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const ballWallCollision = () => {
  // detectar si esa collision existe
  if (ballX + ballRadius > canvas.width) {
    // console.log("la pelotita colissiono con la pared derecha")
    ballDirectionX = -1; // ahora mueve hacia la izquierda
  } else if (ballY + ballRadius > canvas.height) {
    // console.log("la pelotita colissiono con la pared de abajo")
    // AQUI IRÁ EL FIN DEL JUEGO (GAMEOVER)
    // ballDirectionY = -1;
    isGameOn = false;
    // ejemplos de que hacer con el usuario al terminar el juego
    // podríamos acceder a un elemento de DOM y decir game over
    // prompt("Gracias por jugar")
    // canvas.style.display = "none"
  } else if (ballX - ballRadius < 0) {
    // console.log("la pelotita colissiono con la pared de izquierda")
    ballDirectionX = 1;
  } else if (ballY - ballRadius < 0) {
    ballDirectionY = 1;
  }
};

const ballPaddleCollision = () => {
  if (
    ballY + ballRadius > paddleY &&
    ballX - ballRadius > paddleX &&
    ballX + ballRadius < paddleX + paddleWidth
  ) {
    // console.log("la pelota colisiona con el paddle");
    ballDirectionY = -1;
  }
};

const gameLoop = () => {
  // console.log("el juego está andando")
  // 1. limpiar el canvas
  clearCanvas();

  // 2. movimientos o acciones de los elementos
  moveBall();
  ballWallCollision();
  ballPaddleCollision();

  // 3. dibujado de todos los elementos
  drawBall();
  drawPaddle();

  // 4. efecto de recursión
  if (isGameOn === true) {
    requestAnimationFrame(gameLoop);
  }
};

// ADDEVENTLISTENERS

window.addEventListener("keydown", (event) => {
  console.log(event.code); // el codigo de tecla que estoy presionando
  if ((event.code === "KeyA" || event.code === "ArrowLeft") && paddleX > 0) {
    // aqui muevo el paddle a la izquierda
    paddleX = paddleX - paddleSpeed;
  } else if ((event.code === "KeyD" || event.code === "ArrowRight") && paddleX + paddleWidth < canvas.width) {
    // aqui muevo el paddle a la derecha
    paddleX = paddleX + paddleSpeed;
  }
});

window.addEventListener("load", gameLoop);


// BONUS

// cada vez que la pelota colisione con el paddle aumente la velocidad
// cada vez que colisiona con el paddle, incrementa el score.
  // hacermos target del score
  // y le subimos 1

// Paddle tenga un movimiento automatico. La tecla < o > simplemente afecta el movimiento automatico
// luego de un tiempo el paddle se haga más corto
// agregar sonidos cada vez que hay colision => new Audio 

