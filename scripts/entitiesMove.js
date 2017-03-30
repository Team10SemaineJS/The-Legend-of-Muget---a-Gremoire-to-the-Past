var hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:0, y:0, w:34, h:64},
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
  skeletonMove2();
  skeletonMove3();
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
    skeleton.x += spdSkeleton1;
    skeleton.y += spdSkeleton1;
    hitboxSkeleton.x += spdSkeleton1;
    hitboxSkeleton.y += spdSkeleton1;
  }
  if(diffX > 0 || diffY < 0)
  {
    skeleton.x += spdSkeleton1;
    skeleton.y -= spdSkeleton1;
    hitboxSkeleton.x += spdSkeleton1;
    hitboxSkeleton.y -= spdSkeleton1;
  }
  if(diffX < 0 || diffY > 0)
  {
    skeleton.x -= spdSkeleton1;
    skeleton.y += spdSkeleton1;
    hitboxSkeleton.x -= spdSkeleton1;
    hitboxSkeleton.y += spdSkeleton1;
  }
  if(diffX < 0 || diffY < 0)
  {
    skeleton.x -= spdSkeleton1;
    skeleton.y -= spdSkeleton1;
    hitboxSkeleton.x -= spdSkeleton1;
    hitboxSkeleton.y -= spdSkeleton1;
  }
}

function skeletonMove2(){
  var diffX = player.x - skeleton2.x;
  var diffY = player.y - skeleton2.y;
  if(diffX > 0 || diffY > 0)
  {
    skeleton2.x += spdSkeleton2;
    skeleton2.y += spdSkeleton2;
    hitboxSkeleton.x += spdSkeleton2;
    hitboxSkeleton.y += spdSkeleton2;
  }
  if(diffX > 0 || diffY < 0)
  {
    skeleton2.x += spdSkeleton2;
    skeleton2.y -= spdSkeleton2;
    hitboxSkeleton.x += spdSkeleton2;
    hitboxSkeleton.y -= spdSkeleton2;
  }
  if(diffX < 0 || diffY > 0)
  {
    skeleton2.x -= spdSkeleton2;
    skeleton2.y += spdSkeleton2;
    hitboxSkeleton.x -= spdSkeleton2;
    hitboxSkeleton.y += spdSkeleton2;
  }
  if(diffX < 0 || diffY < 0)
  {
    skeleton2.x -= spdSkeleton2;
    skeleton2.y -= spdSkeleton2;
    hitboxSkeleton.x -= spdSkeleton2;
    hitboxSkeleton.y -= spdSkeleton2;
  }
}

function skeletonMove3(){
  var diffX = player.x - skeleton3.x;
  var diffY = player.y - skeleton3.y;
  if(diffX > 0 || diffY > 0)
  {
    skeleton3.x += spdSkeleton3;
    skeleton3.y += spdSkeleton3;
    hitboxSkeleton.x += spdSkeleton3;
    hitboxSkeleton.y += spdSkeleton3;
  }
  if(diffX > 0 || diffY < 0)
  {
    skeleton3.x += spdSkeleton3;
    skeleton3.y -= spdSkeleton3;
    hitboxSkeleton.x += spdSkeleton3;
    hitboxSkeleton.y -= spdSkeleton3;
  }
  if(diffX < 0 || diffY > 0)
  {
    skeleton3.x -= spdSkeleton3;
    skeleton3.y += spdSkeleton3;
    hitboxSkeleton.x -= spdSkeleton3;
    hitboxSkeleton.y += spdSkeleton3;
  }
  if(diffX < 0 || diffY < 0)
  {
    skeleton3.x -= spdSkeleton3;
    skeleton3.y -= spdSkeleton3;
    hitboxSkeleton.x -= spdSkeleton3;
    hitboxSkeleton.y -= spdSkeleton3;
  }
}