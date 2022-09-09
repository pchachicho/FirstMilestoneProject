import TileMap from "./Tilemap.js";

const tileSize = 32;
const velocity = 2;

const canvas = document.getElementById("game"); // Creates canvas and links it to the ID on html "game"
const ctx = canvas.getContext("2d");// References the context in 2d
const tileMap = new TileMap(tileSize);

const pacman = tileMap.getPacman(velocity) //creates pacman
function gameLoop() { // Game loop draws the screen multiple times depending on what i put
  tileMap.draw(ctx); // Draws the map
  pacman.draw(ctx); // Draws Pacman
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75); // 1000 = 1 second so the function calls gameLoop 75 times per second



