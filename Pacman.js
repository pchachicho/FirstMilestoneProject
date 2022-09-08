import MovingDirection from "../src/MovingDirection.js";
// creates the player and positon/velocity and pacmans shape
class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 10;
  }
}