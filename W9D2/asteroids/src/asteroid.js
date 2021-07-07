const Util = require("./util")
const MovingObject = require("./moving_object")

Util.inherits(Asteroid, MovingObject);

function Asteroid(options) {
  MovingObject.call(this, options);
  this.pos = options.pos;
  this.vel = Util.randomVec(500);
  if (options.radius === undefined) {
    this.radius = 20;
  } else {
    this.radius = options.radius;
  };
  if (options.color === undefined) {
    this.color = "red";
  } else {
    this.color = options.color;
  };
};


module.exports = Asteroid;
// Other properties are filled in for you.
// new Asteroid({ pos: [30, 30] });

