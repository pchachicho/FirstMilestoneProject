import TileMap from "./Tilemap.js";

const tileSize = 32;
const velocity = 2;
// Creates canvas and links it to the ID on html "game"
const canvas = document.getElementById("game");
// References the context in 2d
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
//creates pacman
const pacman = tileMap.getPacman(velocity)
function gameLoop() { // Game loop draws the screen multiple times depending on what i put
  tileMap.draw(ctx);
  pacman.draw(ctx);
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75); // 1000 = 1 second so the function calls gameLoop 75 times per second



