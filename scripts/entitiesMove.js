var hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:0, y:0, w:34, h:64},
    hitboxBat = {x:0, y:0, w:34, h:32},
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

  if (hitboxPlayer.y <= collisionVillageTL.y + collisionVillageTL.h && hitboxPlayer.x <= collisionVillageTL.x + collisionVillageTL.w) {
    collisionUp = true;
  } else if (hitboxPlayer.y <= collisionVillageTL.y + collisionVillageTL.h-5 && hitboxPlayer.x <= collisionVillageTL.x + collisionVillageTL.w+5) {
    collisionLeft = true;
  } else {
    collisionUp = false;
    collisionLeft = false;
  }

  if (hitboxPlayer.y + hitboxPlayer.h >= collisionVillageBR.y && hitboxPlayer.x + hitboxPlayer.w >= collisionVillageBR.x) {
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


var dirX = 2;
var dirY = 2;

function batMove(){
  bat.x += dirX;
  bat.y += dirY
  hitboxBat.x = bat.x;
  hitboxBat.y = bat.y;
  if (bat.x <= 0 || bat.x + 32 == canvas.width)
  {
    dirX = -dirX;
  }
  if (bat.y <= 0 || bat.y + 32 == canvas.height)
  {
    dirY = -dirY;
  }
}