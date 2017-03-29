function skeletonMove(){
  self.diffX = player.x - skeleton.x;
  self.diffY = player.y - skeleton.y;
  if(self.diffX > 0 || self.diffY > 0)
  {
    skeleton.x += spdEnemy;
    skeleton.y += spdEnemy;
  }
  if(self.diffX > 0 || self.diffY < 0)
  {
    skeleton.x += spdEnemy;
    skeleton.y -= spdEnemy;
  }
  if(self.diffX < 0 || self.diffY > 0)
  {
    skeleton.x -= spdEnemy;
    skeleton.y += spdEnemy;
  }
  if(self.diffX < 0 || self.diffY < 0)
  {
    skeleton.x -= spdEnemy;
    skeleton.y -= spdEnemy;
  }
}


function skeletonDraw() {
  self.srcSpriteX = srcSpriteX;
  self.srcSpriteY = directionSpriteSkeleton.srcSpriteY;
  directionSpriteSkeleton(); //Sprite switch
  context.drawImage(skeletonSprite, self.srcSpriteX, self.srcSpriteY, skeleton.width, skeleton.height, skeleton.x, skeleton.y, skeleton.width, skeleton.height);
  if(skeletonMove.diffX == 0 && d) {
    self.srcSpriteX = 0; //Back to static / Spritesheet col1
  }
}

function directionSpriteSkeleton(){
  self.diffX = player.x - skeleton.x;
  self.diffY = player.y - skeleton.y;
  if(self.diffX == 0 && self.diffY > 0)
  {
    self.srcSpriteY = skeleton.height * 0;
  }
  if(self.diffX > 0 && self.diffY < 0 || self.diffX > 0 && self.diffY = 0 || self.diffX > 0 && self.diffY > 0)
  {
    self.srcSpriteY = skeleton.height * 1;
  }
  if(self.diffX < 0 && self.diffY < 0 || self.diffX < 0 && self.diffY = 0 || self.diffX < 0 && self.diffY > 0)
  {
    self.srcSpriteY = skeleton.height * 2;
  }
  if(self.diffX = 0 && self.diffY < 0)
  {
    self.srcSpriteY = skeleton.height * 3;
  }
