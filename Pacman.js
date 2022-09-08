import MovingDirection from "../src/MovingDirection.js";
export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
    this.#loadPacmanImages();
  }
  draw(ctx) {}
  #loadPacmanImages(){
    // const pacmanImage1 = new Image();
    // pacmanImage1.src = "./images/pac0.png"

    // const pacmanImage1 = new Image();
    // pacmanImage1.src = "./images/pac0.png"

    // const pacmanImage1 = new Image();
    // pacmanImage1.src = "./images/pac0.png"

    // const pacmanImage1 = new Image();
    // pacmanImage1.src = "./images/pac0.png"
}


}