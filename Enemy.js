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

    this.directionTimerDefault = this.#random(1, 12);
    this.directionTimer = this.directionTimerDefault;
  }
  draw(ctx, pause, pacman) {
    //draws the enemys
    
    this.#move();
    this.#changeDirection();
    
    this.#setImage(pacman);
    ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
  }
  #setImage(pacman) {
    
  }
  //checks if pacman overlaps enemy tiles
  collideWith(pacman) {
    const size = this.tileSize / 2; // /2 means it detects if we are halfway over the tile
    if (
        // if pacman is greater then x or y it = true. if not it returns false
      this.x < pacman.x + size && 
      this.x + size > pacman.x &&
      this.y < pacman.y + size &&
      this.y + size > pacman.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  #changeDirection() {
    this.directionTimer--;
    let newMoveDirection = null;
    if (this.directionTimer == 0) {
      // If timer is 0 it resets the timer back to default
      this.directionTimer = this.directionTimerDefault;
      newMoveDirection = Math.floor(
        Math.random() * Object.keys(MovingDirection).length
      );
    }
    if (newMoveDirection != null && this.movingDirection != newMoveDirection) {
      if (
        //same code as pacman. checking if numbers are not decimals
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        if (
          !this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            newMoveDirection
          )
        ) {
          this.movingDirection = newMoveDirection;
        }
      }
    } //prevents enemys from constantly hitting wall
  }

  #move() {
    // movement if they collided
    if (
      !this.tileMap.didCollideWithEnvironment(
        this.x,
        this.y,
        this.movingDirection
      )
    ) {
      switch (
        this.movingDirection //same movement as pacman
      ) {
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
