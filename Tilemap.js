import Pacman from "./Pacman.js";
import MovingDirection from "./MovingDirection.js";
import Enemy from "./Enemy.js";
export default class TileMap {
  //exports the map to Game.js
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.yellowDot = new Image();
    this.yellowDot.src = "./images/yellowDot.png";

    this.wall = new Image();
    this.wall.src = "./images/tree.png";

    this.grass = new Image();
    this.grass.src = "./images/grass.webp";
  }

  // trees = 1
  //Yellow dot = 0
  //Pacman starting position = 4
  // empty space = 5
  // Enemys = 6
  map = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 1, ],
    [ 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  ];
  // Makes a for loop with conditions i.e if === 1 make a wall
  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 1) {
          // # makes it a private method
          this.#drawWall(ctx, column, row, this.tileSize); //if tile is = 1 it becomes a brick!
        } else if (tile === 0) {
          this.#drawYellowDot(ctx, column, row, this.tileSize); //if tile is = 0 then it turns into a yellow dot
        } else {
          this.#drawBlank(ctx, column, row, this.tileSize);
        }
        if (tile === 5) { //if tile is = 5 it becomes grass
          this.#drawGrass(ctx, column, row, this.tileSize);
        }
      }
    }
  }
  //draws wall
  #drawWall(ctx, column, row, size) {
    ctx.drawImage(
      this.wall,
      column * this.tileSize, //multiplies row and column to make the grid
      row * this.tileSize,
      size, //the size means x and y
      size
    );
  }
  #drawGrass(ctx, column, row, size) {
    ctx.drawImage(
      this.grass,
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
  // instead of removing the yellow dots when they are eaten. This function actually replaces them with a black rectangle
  // also prevents from having weird image glitchs
  #drawBlank(ctx, column, row, size) {
    ctx.fillStyle = "black";
    ctx.fillRect(column * this.tileSize, row * this.tileSize, size, size);
  }
  // Math formula to get pacmans velocity 
  getPacman(velocity) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 4) {// 4 is pacmans id number
          this.map[row][column] = 0;
          return new Pacman( // returns the actual playable pacman
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
  // enemies velocity same as pacman
  getEnemies(velocity) {
    const enemies = [];
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];
        if (tile == 6) {
          this.map[row][column] = 6; // 6 is enemies id number
          enemies.push(
            new Enemy(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize,
              velocity,
              this
            )
          );
        }
      }
    }
    return enemies;
  }
  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize; //Takes first array length and multiplies it by each tile (32pixels)
    canvas.height = this.map.length * this.tileSize; //Takes the map length and multiplies the size to get the height
  }
  didCollideWithEnvironment(x, y, direction) {
    // takes x/y and divides it to figure out if we are in a decimal again
    if (
      Number.isInteger(x / this.tileSize) &&
      Number.isInteger(y / this.tileSize)
    ) {
      let column = 0;
      let row = 0;
      let nextColumn = 0;
      let nextRow = 0;

      switch (direction) {
        case MovingDirection.right:
          nextColumn = x + this.tileSize; // right is + on the x axis 
          column = nextColumn / this.tileSize;
          row = y / this.tileSize;
          break;
        case MovingDirection.left:
          nextColumn = x - this.tileSize; // left is - on the x axis
          column = nextColumn / this.tileSize;
          row = y / this.tileSize;
          break;
        case MovingDirection.down:
          nextRow = y + this.tileSize;// down is + on the y axis
          row = nextRow / this.tileSize;
          column = x / this.tileSize;
          break;
        case MovingDirection.up:
          nextRow = y - this.tileSize; //up is - on the y axis
          row = nextRow / this.tileSize;
          column = x / this.tileSize;
          break;
      }
      //prevents not colliding with the walls
      const tile = this.map[row][column];
      if (tile === 1) {
        return true;
      }
    } // return false if we did not collide
    return false;
  }
  eatDot(x, y) {
    //this is not in use
    const row = y / this.tileSize;
    const column = x / this.tileSize;
    //makes sure theres no decimals
    if (Number.isInteger(row) && Number.isInteger(column)) {
      if (this.map[row][column] === 0) {
        this.map[row][column] = 5; // 5 is no space
      }
    }
  }
}
