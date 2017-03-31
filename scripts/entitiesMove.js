var hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:0, y:0, w:34, h:64},
    hitboxBat = {x:0, y:0, w:34, h:32},
    hitboxBat1 = {x:0, y:0, w:34, h:32},
    hitboxBat2 = {x:0, y:0, w:34, h:32},
    hitboxBat3 = {x:0, y:0, w:34, h:32},
    collisionVillageTL = {x:0, y:0, w:320, h:190},
    collisionVillageBR = {x:730, y:225, w:320, h:64*6},
    collisionUp = false,
    collisionDown = false,
    collisionLeft = false,
    collisionRight = false,
    collisionBorderUp = false,
    collisionBorderDown = false,
    collisionBorderLeft = false,
    collisionBorderRight = false;

function collision() {

  if (hitboxPlayer.y <= collisionVillageTL.y + collisionVillageTL.h 
      && hitboxPlayer.x <= collisionVillageTL.x + collisionVillageTL.w) {
    collisionUp = true;
  } else if (hitboxPlayer.y <= collisionVillageTL.y + collisionVillageTL.h-5 && hitboxPlayer.x <= collisionVillageTL.x + collisionVillageTL.w+5) {
    collisionLeft = true;
  } else {
    collisionUp = false;
    collisionLeft = false;
  }

  if (hitboxPlayer.y + hitboxPlayer.h >= collisionVillageBR.y 
      && hitboxPlayer.x + hitboxPlayer.w >= collisionVillageBR.x) {
    collisionDown = true;
  } else if (hitboxPlayer.x + hitboxPlayer.w >= collisionVillageBR.x-20 && hitboxPlayer.y + hitboxPlayer.h >= collisionVillageBR.y+10) {
    collisionRight = true;
  } else {
    collisionDown = false;
    collisionRight = false;
  }
}

function collisionBorder() {
  if (hitboxPlayer.y <= 0) {
    collisionBorderUp = true;
  } else if (hitboxPlayer.y + hitboxPlayer.h >= canvas.height) {
    collisionBorderDown = true;
  } else if (hitboxPlayer.x <= 0) {
    collisionBorderLeft = true;
  } else if (hitboxPlayer.x + hitboxPlayer.w >= canvas.width) {
    collisionBorderRight = true;
  } else {
    collisionBorderUp = false;
    collisionBorderLeft = false;
    collisionBorderDown = false;
    collisionBorderRight = false;
  }
}


function entitiesMove() {
  playerMove();
  skeletonMove();
  batMove();
  batMove1();
  batMove2();
  batMove3();
}

function playerMove(){
  document.onkeydown = function(event){
    if(event.keyCode == 90) { //Z
      player.pressingUp = true;
    }
    else if(event.keyCode == 81) { //Q
      player.pressingLeft = true;
    }
    else if(event.keyCode == 83) { //S
      player.pressingDown = true;
    }
    else if(event.keyCode == 68) { //D
      player.pressingRight = true;
    }
  }

  document.onkeyup = function(event){
    if(event.keyCode == 90) { //Z
      player.pressingUp = false;
    }
    else if(event.keyCode == 81) { //Q
      player.pressingLeft = false;
    }
    else if(event.keyCode == 83) { //S
      player.pressingDown = false;
    }
    else if(event.keyCode == 68) { //D
      player.pressingRight = false;
    }
  }

  if(player.pressingUp && collisionUp === false && collisionBorderUp === false)
  {  //Z
    player.y -= spdPlayer;
    hitboxPlayer.y -= spdPlayer;
  }
  else if(player.pressingLeft && collisionLeft === false && collisionBorderLeft === false)
  { //Q
    player.x -= spdPlayer;
    hitboxPlayer.x -= spdPlayer;
  }
  else if(player.pressingDown && collisionDown === false && collisionBorderDown === false)
  { //S
    player.y += spdPlayer;
    hitboxPlayer.y += spdPlayer
  }
  else if(player.pressingRight && collisionRight === false && collisionBorderRight === false)
  { //D
    player.x += spdPlayer;
    hitboxPlayer.x += spdPlayer;
  }
}

function skeletonMove(){
  var diffX = player.x - skeleton.x;
  var diffY = player.y - skeleton.y;
  if(diffX > 0 || diffY > 0)
  {
    skeleton.x += spdSkeleton;
    skeleton.y += spdSkeleton;
    hitboxSkeleton.x += spdSkeleton;
    hitboxSkeleton.y += spdSkeleton;
  }
  if(diffX > 0 || diffY < 0)
  {
    skeleton.x += spdSkeleton;
    skeleton.y -= spdSkeleton;
    hitboxSkeleton.x += spdSkeleton;
    hitboxSkeleton.y -= spdSkeleton;
  }
  if(diffX < 0 || diffY > 0)
  {
    skeleton.x -= spdSkeleton;
    skeleton.y += spdSkeleton;
    hitboxSkeleton.x -= spdSkeleton;
    hitboxSkeleton.y += spdSkeleton;
  }
  if(diffX < 0 || diffY < 0)
  {
    skeleton.x -= spdSkeleton;
    skeleton.y -= spdSkeleton;
    hitboxSkeleton.x -= spdSkeleton;
    hitboxSkeleton.y -= spdSkeleton;
  }
}

// BATMOVE


var dirXBat = 2;
var dirYBat = 2;
var dirXBat1 = 2;
var dirYBat1 = 2;
var dirXBat2 = 2;
var dirYBat2 = 2;
var dirXBat3 = 2;
var dirYBat3 = 2;

function batMove(){
  bat.x += dirXBat;
  bat.y += dirYBat;
  hitboxBat.x = bat.x;
  hitboxBat.y = bat.y;
  if (bat.x <= 0 || bat.x + 32 == canvas.width)
  {
    dirXBat = -dirXBat;
  }
  if (bat.y <= 0 || bat.y + 32 == canvas.height)
  {
    dirYBat = -dirYBat;
  }
}

function batMove1(){
  bat1.x += dirXBat1;
  bat1.y += dirYBat1;
  hitboxBat1.x = bat1.x;
  hitboxBat1.y = bat1.y;
  if (bat1.x <= 0 || bat1.x + 32 == canvas.width)
  {
    dirXBat1 = -dirXBat1;
  }
  if (bat1.y <= 0 || bat1.y + 32 == canvas.height)
  {
    dirYBat1 = -dirYBat1;
  }
}

function batMove2(){
  bat2.x += dirXBat2;
  bat2.y += dirYBat2;
  hitboxBat2.x = bat2.x;
  hitboxBat2.y = bat2.y;
  if (bat2.x <= 0 || bat2.x + 32 == canvas.width)
  {
    dirXBat2 = -dirXBat2;
  }
  if (bat2.y <= 0 || bat2.y + 32 == canvas.height)
  {
    dirYBat2 = -dirYBat2;
  }
}


function batMove3(){
  bat3.x += dirXBat3;
  bat3.y += dirYBat3;
  hitboxBat3.x = bat3.x;
  hitboxBat3.y = bat3.y;
  if (bat3.x <= 0 || bat3.x + 32 == canvas.width)
  {
    dirXBat3 = -dirXBat3;
  }
  if (bat3.y <= 0 || bat3.y + 32 == canvas.height)
  {
    dirYBat3 = -dirYBat3;
  }
}