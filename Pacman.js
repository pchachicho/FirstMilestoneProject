import MovingDirection from "./MovingDirection.js";
export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap,) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;

    this.currentMovingDirection = null;
    this.requestedMovingDirection = null;

    this.pacmanAnimationTimerDefault = 10;
    this.pacmanAnimationTimer = null;
   
    this.pacmanRotation = this.Rotation.right;

    document.addEventListener("keydown", this.keydown);
    this.#loadPacmanImages();
  }
  //Draws the movement of images of pacman and animates them
  draw(ctx, pause) {
    if(pause){
    this.#move();
    this.#animate();
    }
    this.#eatDot();
    // What this code does is basically rotates the whole entire map which ends up in a glitch in the map. at the end "ctx.restore()" restores the canvas back
    // to normal but leaves pacman rotating everytime a key is pressed which ends up with the animation being complete.
    const size = this.tileSize / 2;
    ctx.save();
    ctx.translate(this.x + size, this.y + size);
    ctx.rotate((this.pacmanRotation * 90 * Math.PI) / 180);
    ctx.drawImage(
      this.pacmanImages[this.pacmanImageIndex],
      -size,
      -size,
      this.tileSize,
      this.tileSize
    );
    ctx.restore();
  }
  
  Rotation = {
    right: 0,
    down: 1,
    left: 2,
    up: 3,
  };
  #loadPacmanImages() {
    //Pacman images for animation
    const pacmanImage1 = new Image();
    pacmanImage1.src = "./images/pac0.png";

    const pacmanImage2 = new Image();
    pacmanImage2.src = "./images/pac1.png";

    const pacmanImage3 = new Image();
    pacmanImage3.src = "./images/pac2.png";

    const pacmanImage4 = new Image();
    pacmanImage4.src = "./images/pac0.png";

    this.pacmanImages = [
      pacmanImage1,
      pacmanImage2,
      pacmanImage3,
      pacmanImage4,
    ];

    this.pacmanImageIndex = 0; //First image pacman starts as (fully closed)
  }

  keydown = (event) => {
    // Up key
    if (event.keyCode == 38) {
      if (this.currentMovingDirection == MovingDirection.down)
        this.currentMovingDirection = MovingDirection.up; //if your moving down your good to go up
      this.requestedMovingDirection = MovingDirection.up; //if you going anyother direction it checks to see if your able to move up
      
    }
    // Down key
    if (event.keyCode == 40) {
      if (this.currentMovingDirection == MovingDirection.up)
        this.currentMovingDirection = MovingDirection.down;
      this.requestedMovingDirection = MovingDirection.down;
      
    }
    // Left key
    if (event.keyCode == 37) {
      if (this.currentMovingDirection == MovingDirection.right)
        this.currentMovingDirection = MovingDirection.left;
      this.requestedMovingDirection = MovingDirection.left;
      
    }
    // Right key
    if (event.keyCode == 39) {
      if (this.currentMovingDirection == MovingDirection.left)
        this.currentMovingDirection = MovingDirection.right;
      this.requestedMovingDirection = MovingDirection.right;
      
    }
  };
  // this function basically does not allow you to switch in between decimal points and only when your exactly on the 32bit image
  #move() {
    if (this.currentMovingDirection !== this.requestedMovingDirection) {
      if (
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        // ! askes the code a question if we collided or not
        if (
          !this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            this.requestedMovingDirection
          )
        )
          this.currentMovingDirection = this.requestedMovingDirection;
      }
    }
    if (
      this.tileMap.didCollideWithEnvironment(
        this.x,
        this.y,
        this.currentMovingDirection
      )
    ) {
      return;
    } else if ( //
      this.currentMovingDirection != null &&
      this.pacmanAnimationTimer == null
    ) {
      this.pacmanAnimationTimer = this.pacmanAnimationTimerDefault;
    }
    // Depending on your direction "switch" will change pacmans x or y value
    switch (this.currentMovingDirection) {
      case MovingDirection.up:
        this.y -= this.velocity; 
        this.pacmanRotation = this.Rotation.up;
        break;
      case MovingDirection.down:
        this.y += this.velocity;
        this.pacmanRotation = this.Rotation.down;
        break;
      case MovingDirection.right:
        this.x += this.velocity;
        this.pacmanRotation = this.Rotation.right;
        break;
      case MovingDirection.left:
        this.x -= this.velocity;
        this.pacmanRotation = this.Rotation.left;
        break;
    }
  }
  #animate() {
    if (this.pacmanAnimationTimer == null) {
      return;
    }
    this.pacmanAnimationTimer--; // minus the value which is currently 10
    //if value is = 0 it tells the console that the image needs to be changed
    if (this.pacmanAnimationTimer == 0) {
      this.pacmanAnimationTimer = this.pacmanAnimationTimerDefault;
      this.pacmanImageIndex++;
      if (this.pacmanImageIndex == this.pacmanImages.length)
        this.pacmanImageIndex = 0;
    }
  }
  #eatDot() {
    if (this.tileMap.eatDot(this.x, this.y)) {
    }
  }
}
