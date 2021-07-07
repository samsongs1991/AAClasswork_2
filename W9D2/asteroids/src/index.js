const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("game-canvas");
  const context = canvas.getContext("2d");
});