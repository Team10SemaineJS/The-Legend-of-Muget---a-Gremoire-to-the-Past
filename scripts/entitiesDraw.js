function drawEntities() {
  playerDraw();
  skeletonDraw();
  batDraw();
}


function playerDraw() {
  player.srcSpriteX = srcSpriteX;
  player.srcSpriteY = srcSpriteY;
  directionSpritePlayer(); //Sprite switch
  context.drawImage(playerSprite,
                    player.srcSpriteX, player.srcSpriteY, player.width, player.height,
                    player.x, player.y, player.width, player.height);
  if (player.pressingDown == false && player.pressingRight == false && player.pressingLeft == false && player.pressingUp == false) { //Player doesn't move
    srcSpriteX = 0; //Back to static / Spritesheet col1
  } else {
    player.srcSpriteX = srcSpriteX;
  }
}


function directionSpritePlayer() {
  if (player.pressingDown) {
    srcSpriteY = 0; //Spritesheet row1
    switchPlayerSprite();
  } else if (player.pressingRight) {
    srcSpriteY = player.height; //Spritesheet row2
    switchPlayerSprite();
  } else if (player.pressingLeft) {
    srcSpriteY = player.height * 2; //Spritesheet row3
    switchPlayerSprite();
  } else if (player.pressingUp) {
    srcSpriteY = player.height * 3; //Spritesheet row4
    switchPlayerSprite();
  }
}

function switchPlayerSprite() {
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


var srcSpriteSkeletonX = 0;
var srcSpriteSkeletonY = 0;

function skeletonDraw() {
  skeletonDraw.srcSpriteX = srcSpriteSkeletonX;
  skeletonDraw.srcSpriteY = srcSpriteSkeletonY;
  directionSpriteSkeleton(); //Sprite switch
  context.drawImage(skeletonSprite, skeletonDraw.srcSpriteX, skeletonDraw.srcSpriteY, skeleton.width, skeleton.height, skeleton.x, skeleton.y, skeleton.width, skeleton.height);
}

var srcSpriteBatX = 0;
var srcSpriteBatY = 0;

function batDraw() {
  batDraw.srcSpriteX = srcSpriteBatX;
  batDraw.srcSpriteY = srcSpriteBatY;
  directionSpritePlayer(); //Sprite switch 
  context.drawImage(batSprite, batDraw.srcSpriteX, batDraw.srcSpriteY, bat.width, bat.height, bat.x, bat.y, bat.width, bat.height);
}



function directionSpriteSkeleton(){
  var diffX = player.x - skeleton.x;
  var diffY = player.y - skeleton.y;
  if (diffX >= 0 && diffY >= 0)
  {
    srcSpriteSkeletonY = skeleton.height * 0;
  } else if (diffX > 0 && diffY < 0 || diffX > 0 && diffY == 0 || diffX > 0 && diffY > 0)
  {
    srcSpriteSkeletonY = skeleton.height * 1;
  } else if (diffX < 0 && diffY < 0 || diffX < 0 && diffY == 0 || diffX < 0 && diffY > 0)
  {
    srcSpriteSkeletonY = skeleton.height * 2;
  } else
  {
    srcSpriteSkeletonY = skeleton.height * 0;
  }
}



var attack = setInterval(function(){ hitbox()}, 1000);

function hitbox() {
  hitboxSkeleton.x = skeleton.x + 15;
  hitboxSkeleton.y = skeleton.y;
  if (hitboxPlayer.x < hitboxSkeleton.x + hitboxSkeleton.w 
      && hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton.x 
      && hitboxPlayer.y < hitboxSkeleton.y + hitboxSkeleton.h 
      && hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton.y) {
    hpPlayer -= 1;
  } else if (hitboxPlayer.x < hitboxBat.x + hitboxBat.w 
             && hitboxPlayer.x + hitboxPlayer.w > hitboxBat.x 
             && hitboxPlayer.y < hitboxBat.y + hitboxBat.h 
             && hitboxPlayer.h + hitboxPlayer.y > hitboxBat.y) {
    hpPlayer -= 1;
  } else {

    hpPlayer = hpPlayer;
  }
}

var heart = document.querySelector("#heart"),
    hpPlayer = 6;

function hp(){
  if (hpPlayer === 6)
  {
    heart.innerHTML = '<img src="images/hp/hp6.png">';
  }
  else if (hpPlayer === 5)
  {
    heart.innerHTML = '<img src="images/hp/hp5.png">';
  }
  else if (hpPlayer === 4)
  {
    heart.innerHTML = '<img src="images/hp/hp4.png">';
  }
  else if (hpPlayer === 3)
  {
    heart.innerHTML = '<img src="images/hp/hp3.png">';
  }
  else if (hpPlayer === 2)
  {
    heart.innerHTML = '<img src="images/hp/hp2.png">';
  }
  else
  {
    heart.innerHTML = '<img src="images/hp/hp1.png">';
  }
}

