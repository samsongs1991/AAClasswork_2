function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
};

MovingObject.prototype.draw = function () {
    const canvas = document.getElementById("game-canvas");
    const context = canvas.getContext("2d");
    // const context = ctx;
    context.beginPath();

    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
}

module.exports = MovingObject;

// mo.draw(document.getElementById("game-canvas").getContext("2d"));

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 10,
  color: "pink"
});