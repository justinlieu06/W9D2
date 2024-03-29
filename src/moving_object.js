function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 30, color: "#00FF00" }
// );

const mo = new MovingObject(
  { pos: [250, 250], vel: [10, 10], radius: 50, color: "#00FF00" }
);

module.exports = {mo, MovingObject};
