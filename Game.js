import TileMap from "./Tilemap.js";
// Creates canvas and links it to the ID on html "game"
const canvas = document.getElementById("game");
// References the context in 2d
const ctx = canvas.getContext("2d");
const tileSize = 32;
const tileMap = new TileMap(tileSize);
// Game loop draws the screen multiple times depending on what i put
function gameLoop() {
  tileMap.draw();
}
// 1000 = 1 second so the function calls gameLoop 75 times per second
setInterval(gameLoop, 1000 / 75);



