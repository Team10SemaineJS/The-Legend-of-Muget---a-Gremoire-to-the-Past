var canvas= document.querySelector("canvas");
var context= canvas.getContext("2d");
var player = new Image();
var gremoire = {};

canvas.width = 500;
canvas.height = 500;


function init(){
  gremoire.image= 'images/Characters/Sprite_puget_basx64.png';
  gremoire.x=10;
  gremoire.y= 10;
  gremoire.pressingUp = false;
  gremoire.pressingDown = false;
  gremoire.pressingLeft = false;
  gremoire.pressingRight = false;
  player.src = gremoire.image;
  window.requestAnimationFrame(loop);
}

function draw(){

    context.drawImage(player, gremoire.x, gremoire.y, 64, 64);
}

function update(){
  document.onkeydown = function(event){
    if(event.keyCode == 38) { //Z
      gremoire.pressingUp = true;
    }
    else if(event.keyCode == 37) { //Q
      gremoire.pressingLeft = true;
    }
    else if(event.keyCode == 40) { //S
      gremoire.pressingDown = true;
    }
    else if(event.keyCode == 39) { //D
      gremoire.pressingRight = true;
    }
  }

  document.onkeyup = function(event){
    if(event.keyCode == 38) { //Z
      gremoire.pressingUp = false;
    }
    else if(event.keyCode == 37) { //Q
      gremoire.pressingLeft = false;
    }
    else if(event.keyCode == 40) { //S
      gremoire.pressingDown = false;
    }
    else if(event.keyCode == 39) { //D
      gremoire.pressingRight = false;
    }
  }
  
  if(gremoire.pressingUp) {  //z
    gremoire.y -= 10;
  }
  if(gremoire.pressingLeft) { //q
    gremoire.x -= 10;
  }
  if(gremoire.pressingDown) { //s
    gremoire.y += 10;
  }
  if(gremoire.pressingRight) { //d
    gremoire.x += 10;
  }
}

function loop(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  update();
  draw();
  window.requestAnimationFrame(loop);
}


init();




