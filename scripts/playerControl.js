/******************* WALK **************************/

document.onkeydown = function(event){
  if(event.keyCode == 38) { //Z
    player.pressingUp = true;
  }
  else if(event.keyCode == 37) { //Q
    player.pressingLeft = true;
  }
  else if(event.keyCode == 40) { //S
    player.pressingDown = true;
  }
  else if(event.keyCode == 39) { //D
    player.pressingRight = true;
  }
}

document.onkeyup = function(event){
  if(event.keyCode == 38) { //Z
    player.pressingUp = false;
  }
  else if(event.keyCode == 37) { //Q
    player.pressingLeft = false;
  }
  else if(event.keyCode == 40) { //S
    player.pressingDown = false;
  }
  else if(event.keyCode == 39) { //D
    player.pressingRight = false;
  }
}


/******************* SHOOT **************************/

playerAttack.addEventListener(){
  "click";
  function(){
    if(arrow > 0){
      /shooting
    }
  };
  false
};