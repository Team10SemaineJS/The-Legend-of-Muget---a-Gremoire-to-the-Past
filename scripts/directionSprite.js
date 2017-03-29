function directionSpritePlayer() {
  if (player.pressingDown) {
    srcSpriteY = 0; //Spritesheet row1
    switchSprite();
  }
  if (player.pressingRight) {
    srcSpriteY = player.height; //Spritesheet row2
    switchSprite();
  }
  if (player.pressingLeft) {
    srcSpriteY = player.height * 2; //Spritesheet row3
    switchSprite();
  }
  if (player.pressingUp) {
    srcSpriteY = player.height * 3; //Spritesheet row4
    switchSprite();
  }
}

function switchSprite() {
  if (step <= minStep) {
    srcSpriteX = player.width; //Spritesheet col2
    step += 1;
  } else if (step <= maxStep) {
    srcSpriteX = player.width * 2; //Spritesheet col3
    step += 1;
  } else if (step >= maxStep + 1) { //Reboot step
    step = 1;
  }
}