function playerMove(){
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
    gremoire.y -= spd;
  }
  if(gremoire.pressingLeft) { //q
    gremoire.x -= spd;
  }
  if(gremoire.pressingDown) { //s
    gremoire.y += spd;
  }
  if(gremoire.pressingRight) { //d
    gremoire.x += spd;
  }
}