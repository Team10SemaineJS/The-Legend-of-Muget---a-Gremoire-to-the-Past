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
  
  if(player.pressingUp) {  //Z
    player.y -= spdPlayer;
  }
  if(player.pressingLeft) { //Q
    player.x -= spdPlayer;
  }
  if(player.pressingDown) { //S
    player.y += spdPlayer;
  }
  if(player.pressingRight) { //D
    player.x += spdPlayer;
  }
}

