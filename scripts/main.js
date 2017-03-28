var canvas= document.querySelector("canvas");
var context= canvas.getContext("2d");
var player = new Image();
var map = new Image();
var gremoire = {};
var spd = 3

canvas.width = 1024;
canvas.height = 512;
canvas.style.border = "1px solid #000"


function init(){
  gremoire.image= 'images/gremoire_static.png';
  map.image= 'images/maquette.png'
  gremoire.x=470;
  gremoire.y= 260;
  gremoire.pressingUp = false;
  gremoire.pressingDown = false;
  gremoire.pressingLeft = false;
  gremoire.pressingRight = false;
  player.src = gremoire.image;
  window.requestAnimationFrame(loop);
}

function draw(){

  context.drawImage(player, gremoire.x, gremoire.y, 64, 64);
  context.drawImage(map, 0, 0, 1024, 512);
}

function loop(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  playerMove();
  draw();
  window.requestAnimationFrame(loop);
}

init();




