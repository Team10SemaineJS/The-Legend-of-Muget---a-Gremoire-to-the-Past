var hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:0, y:0, w:34, h:64},
    hitboxBat = {x:0, y:0, w:64, h:32},
    hitboxBat1 = {x:0, y:0, w:64, h:32},
    hitboxBat2 = {x:0, y:0, w:64, h:32},
    hitboxBat3 = {x:0, y:0, w:64, h:32},
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

function collision() {/* collision handle the limits between the player and the trees and houses */

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

function collisionBorder() { /* Limits defined on the game map for the entities */
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


function entitiesMove() { /* Call functions that allow entities to move */
  playerMove();
  skeletonMove();
  batMove();
  batMove1();
  batMove2();
  batMove3();
}

function playerMove(){ 
  document.onkeydown = function(event){ /* Keyboard settings for key hold pressed*/
    if(event.keyCode == 90) { //Z for going up
      player.pressingUp = true;
    }
    else if(event.keyCode == 81) { //Q for going left 
      player.pressingLeft = true;
    }
    else if(event.keyCode == 83) { //S for going down
      player.pressingDown = true;
    }
    else if(event.keyCode == 68) { //D for going right
      player.pressingRight = true;
    }
  }

  document.onkeyup = function(event){ /* Keyboard settings for key not pressed not to have the player keeping old values*/
    if(event.keyCode == 90) { //Cancel Z
      player.pressingUp = false;
    }
    else if(event.keyCode == 81) { //Cancel Q
      player.pressingLeft = false;
    }
    else if(event.keyCode == 83) { //Cancel S
      player.pressingDown = false;
    }
    else if(event.keyCode == 68) { //Cancel D
      player.pressingRight = false;
    }
  }

  if(player.pressingUp && collisionUp === false && collisionBorderUp === false) /* Handles movement of the player on X and Y */
  {  //Moving up
    player.y -= spdPlayer;
    hitboxPlayer.y -= spdPlayer;
  }
  else if(player.pressingLeft && collisionLeft === false && collisionBorderLeft === false)
  { //Moving Left
    player.x -= spdPlayer;
    hitboxPlayer.x -= spdPlayer;
  }
  else if(player.pressingDown && collisionDown === false && collisionBorderDown === false)
  { //Moving down
    player.y += spdPlayer;
    hitboxPlayer.y += spdPlayer
  }
  else if(player.pressingRight && collisionRight === false && collisionBorderRight === false)
  { //Moving right
    player.x += spdPlayer;
    hitboxPlayer.x += spdPlayer;
  }
}

function skeletonMove(){ /* Movement on X and Y for the skeleton entity, following the player */
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

function batMove(){ /* Moves one bat in order to that it bounds on the borders of the map */
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

/* Movements for the others bats */

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