function updatePlayerPosition(){
  
  if(player.pressingUp) {
    posY -= dirY;
    player.style.top = posY+'px';
  }
  if(player.pressingLeft) { //q
    posX -= dirX;
    player.style.left = posX+"px";
  }
  if(player.pressingDown) { //s
    posY += dirY;
    player.style.top = posY+"px";
  }
  if(player.pressingRight) { //zd
    posX += dirX;
    player.style.left = posX+"px";
  }
};