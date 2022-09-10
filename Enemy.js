import MovingDirection from "./MovingDirection.js";
export default class Enemy {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;

    this.#loadImages();
    this.movingDirection = Math.floor(
      Math.random() * Object.keys(MovingDirection).length
    ); //random moving direction

    this.directionTimerDefault = this.#random(10, 50);
    this.directionTimer = this.directionTimerDefault;
    
  }
  draw(ctx) {
    //draws the enemys
    this.#move();
    ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
  }
  #move() {
    if (
      !this.tileMap.didCollideWithEnvironment(
        this.x,
        this.y,
        this.movingDirection
      )
    ) {
      switch (this.movingDirection) {
        case MovingDirection.up:
          this.y -= this.velocity;
          break;
        case MovingDirection.down:
          this.y += this.velocity;
          break;
        case MovingDirection.left:
          this.x -= this.velocity;
          break;
        case MovingDirection.right:
          this.x += this.velocity;
          break;
      }
    }
  }
  #random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // gives us a value between 10 and 50 from this.directionTimerDefault
  }
  #loadImages() {
    this.wolf = new Image();
    this.wolf.src = "./images/Wolf.png";

    this.image = this.wolf;
  }
}
