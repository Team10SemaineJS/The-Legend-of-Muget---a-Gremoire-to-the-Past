var hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:35, y:20, w:34, h:64},
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
    console.log("collisionUp");
  } else if (hitboxPlayer.y <= collisionVillageTL.y + collisionVillageTL.h-5 && hitboxPlayer.x <= collisionVillageTL.x + collisionVillageTL.w+5) {
    collisionLeft = true;
    console.log("collisionLeft");
  } else {
    collisionUp = false;
    collisionLeft = false;
    console.log ("rien");
  }

  if (hitboxPlayer.y + hitboxPlayer.h >= collisionVillageBR.y && hitboxPlayer.x + hitboxPlayer.w >= collisionVillageBR.x) {
    collisionDown = true;
    console.log("collisionDown");
  } else if (hitboxPlayer.x + hitboxPlayer.w >= collisionVillageBR.x-20 && hitboxPlayer.y + hitboxPlayer.h >= collisionVillageBR.y+10) {
    collisionRight = true;
    console.log("collisionRight");
  } else {
    collisionDown = false;
    collisionRight = false;
    console.log ("rien");
  }
}

function collisionBorder() {
  if (hitboxPlayer.y <= 0) {
    collisionBorderUp = true;
    console.log("collisionBorderUp");
  } else if (hitboxPlayer.y + hitboxPlayer.h >= canvas.height) {
    collisionBorderDown = true;
    console.log("collisionBorderDown");
  } else if (hitboxPlayer.x <= 0) {
    collisionBorderLeft = true;
    console.log("collisionBorderLeft");
  } else if (hitboxPlayer.x + hitboxPlayer.w >= canvas.width) {
    collisionBorderRight = true;
    console.log("collisionBorderRight");
  } else {
    collisionBorderUp = false;
    collisionBorderLeft = false;
    collisionBorderDown = false;
    collisionBorderRight = false;
    console.log ("rien");
  }
}


function entitiesMove() {
  playerMove();
  skeletonMove();
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
  if(diffX >= 0 && diffY >= 0)
  {
    skeleton.x += spdSkeleton;
    skeleton.y += spdSkeleton;
    hitboxSkeleton.x += spdSkeleton;
    hitboxSkeleton.y += spdSkeleton;
  }
  else if(diffX >= 0 && diffY <= 0)
  {
    skeleton.x += spdSkeleton;
    skeleton.y -= spdSkeleton;
    hitboxSkeleton.x += spdSkeleton;
    hitboxSkeleton.y -= spdSkeleton;
  }
  else if(diffX <= 0 && diffY >= 0)
  {
    skeleton.x -= spdSkeleton;
    skeleton.y += spdSkeleton;
    hitboxSkeleton.x -= spdSkeleton;
    hitboxSkeleton.y += spdSkeleton;
  }
  else if(diffX <= 0 && diffY <= 0)
  {
    skeleton.x -= spdSkeleton;
    skeleton.y -= spdSkeleton;
    hitboxSkeleton.x -= spdSkeleton;
    hitboxSkeleton.y -= spdSkeleton;
  }
}