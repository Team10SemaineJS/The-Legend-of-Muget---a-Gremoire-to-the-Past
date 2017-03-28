if(posX<=0 || posX>=(widthScreenGame-player.offsetWidth))
  {
    dirX = 0;
  }
  if(posY<=0 || posY>=(heightScreenGame-player.offsetHeight))
  {
    dirY = 0;
  }
  if(dirX == 0){
    posX -= 1;
    dirX = 15;
  }