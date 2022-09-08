import TileMap from "./Tilemap.js";

const tileSize = 32;
// Creates canvas and links it to the ID on html "game"
const canvas = document.getElementById("game");
// References the context in 2d
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
// Game loop draws the screen multiple times depending on what i put
function gameLoop() {
  tileMap.draw(ctx);
}
tileMap.setCanvasSize(canvas);
// 1000 = 1 second so the function calls gameLoop 75 times per second
setInterval(gameLoop, 1000 / 75);



