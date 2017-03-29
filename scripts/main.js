var canvas= document.querySelector("canvas");
var context= canvas.getContext("2d");
var playerSprite = new Image();
var skeletonSprite = new Image();
var player = {};
var skeleton = {};
var spdPlayer = 1.5;
var spdEnemy = 0.5;
var step = 1;
var srcSpriteX = 0;
var srcSpriteY = 0;
var minStep = 30;
var maxStep = 60;

canvas.width = 1024;
canvas.height = 512;

init();
function init() {
  player.image = 'images/sprites/player.png';
  player.x = 470;
  player.y = 260;
  player.width = 64;
  player.height = 64;
  player.pressingUp = false;
  player.pressingDown = false;
  player.pressingLeft = false;
  player.pressingRight = false;
  playerSprite.src = player.image;
  skeleton.image = 'images/sprites/skeleton.png';
  skeleton.x = 20;
  skeleton.y = 20;
  skeleton.width = 64;
  skeleton.height = 64;
  dirX = 0;
  
  skeletonSprite.src = skeleton.image;
  window.requestAnimationFrame(loop);
}

function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  playerMove();
  drawEntities();
  window.requestAnimationFrame(loop);
}

loop();