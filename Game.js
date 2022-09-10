import TileMap from "./Tilemap.js";

const tileSize = 32;
const velocity = 2;
const canvas = document.getElementById("game"); // Creates canvas and links it to the ID on html "game"
const ctx = canvas.getContext("2d"); // References the context in 2d

let gameOver = false;

const howl = new Audio("sounds2/sounds/PACKHOWLsolf.mp3");
const gameOverSound = new Audio("sounds2/sounds/gameOver.wav");

const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity); //creates pacman
const enemies = tileMap.getEnemies(velocity); // gives enemies velocity
function gameLoop() {
  // Game loop draws the screen multiple times depending on what i put
  tileMap.draw(ctx); // Draws the map
  pacman.draw(ctx, pause()); // Draws Pacman
  enemies.forEach((enemy) => enemy.draw(ctx, pacman)); //takes a function/lambda for each enemy
  checkGameOver();
}

function checkGameOver() {
  // checks to see if the game is over. if true it plays the audio death and removes the canvas from the screen
  // displaying the lose screen
  if (!gameOver) {
    gameOver = isGameOver();
    if (gameOver) {
      gameOverSound.play();
      document.getElementById("game").style.display = "none";
      document.querySelector("h1").innerHTML = "You Lost!";
    }
  }
}

setTimeout(function () {
  // function to play wolf howling at the 20 second mark
  howl.play();
}, 20000);

function isGameOver() {
  return enemies.some(
    // checks to see if there is collision with pacman and the wolves
    (enemy) => enemy.collideWith(pacman) 
  );
}

function pause() {
  // || means and or collides with wolfs
  return !pacman.collideWith || gameOver;
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75); // 1000 = 1 second so the function calls gameLoop 75 times per second
