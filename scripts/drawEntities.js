function drawEntities() {
  playerDraw();
}


function playerDraw() {
  self.srcSpriteX = srcSpriteX;
  self.srcSpriteY = srcSpriteY;
  directionSpritePlayer(); //Sprite switch
  context.drawImage(playerSprite, self.srcSpriteX, self.srcSpriteY, player.width, player.height, player.x, player.y, player.width, player.height);
  if (player.pressingDown == false && player.pressingRight == false && player.pressingLeft == false && player.pressingUp == false) { //Player doesn't move
    self.srcSpriteX = 0; //Back to static / Spritesheet col1
  }
}