import Pacman from "./Pacman.js";
export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.yellowDot = new Image();
    this.yellowDot.src = "./images/yellowDot.png";

    this.wall = new Image();
    this.wall.src = "./images/wall.png";
  }

  // Bricks = 1
  //Yellow dot = 0
  //Pacman starting position = 4
  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  // Makes a for loop with conditions i.e if === 1 make a wall
  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 1) {
          // # makes it a private method
          this.#drawWall(ctx, column, row, this.tileSize);
        } else if (tile === 0) {
          this.#drawYellowDot(ctx, column, row, this.tileSize);
        }
        //yellow outlines for image pixels
        //ctx.strokeStyle = "yellow";
        //ctx.strokeRect(
        //column * this.tileSize,
        //row * this.tileSize,
        //this.tileSize,
        //this.tileSize
        //);
      }
    }
  }
  //draws wall
  #drawWall(ctx, column, row, size) {
    ctx.drawImage(
      this.wall,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  //Draws yellow dot
  #drawYellowDot(ctx, column, row, size) {
    ctx.drawImage(
      this.yellowDot,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  getPacman(velocity) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 4) {
          this.map[row][column] = 0;
          return new Pacman(
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            velocity,
            this
          );
        }
      }
    }
  }
  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize; //Takes first array length and multiplies it by each tile (32pixels)
    canvas.height = this.map.length * this.tileSize; //Takes the map length and multiplies the size to get the height
  }
}
