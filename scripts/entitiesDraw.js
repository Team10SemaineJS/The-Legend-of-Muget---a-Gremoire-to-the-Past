function entitiesDraw() { /* Calls functions to draw the entities*/
  playerDraw();
  skeletonDraw();
  batDraw();
  batDraw1();
  batDraw2();
  batDraw3();
}


function playerDraw() { /* Draw the player with his images */
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


function directionSpritePlayer() { /* Changes direction of the sprite with the direction of the move from the player */
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

function skeletonDraw() { /* Draw the skeleton entity with his images */
  skeletonDraw.srcSpriteX = srcSpriteSkeletonX;
  skeletonDraw.srcSpriteY = srcSpriteSkeletonY;
  directionSpriteSkeleton(); //Sprite switch
  context.drawImage(skeletonSprite, skeletonDraw.srcSpriteX, skeletonDraw.srcSpriteY, skeleton.width, skeleton.height, skeleton.x, skeleton.y, skeleton.width, skeleton.height);
}

function directionSpriteSkeleton(){ /* Changes the image sprite depending on where the entity moves */
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


batDraw.srcSpriteX = 0;
batDraw.srcSpriteY = 0;

function batDraw() { /* Draw the bat entities with his image */
  context.drawImage(batSprite, 
                    batDraw.srcSpriteX, batDraw.srcSpriteY, bat.width, bat.height, 
                    bat.x, bat.y, bat.width, bat.height);
}

/* Same purpose as batDraw() for the others entities */

function batDraw1() {
  context.drawImage(batSprite, 
                    batDraw.srcSpriteX, batDraw.srcSpriteY, bat.width, bat.height, 
                    bat1.x, bat1.y, bat.width, bat.height);
}

function batDraw2() {
  context.drawImage(batSprite, 
                    batDraw.srcSpriteX, batDraw.srcSpriteY, bat.width, bat.height, 
                    bat2.x, bat2.y, bat.width, bat.height);
}

function batDraw3() {
  context.drawImage(batSprite, 
                    batDraw.srcSpriteX, batDraw.srcSpriteY, bat.width, bat.height, 
                    bat3.x, bat3.y, bat.width, bat.height);
}



var attack = setInterval(function(){ hitbox()}, 1000); /* Set the interval between to attacks allowed */ 

function hitbox() { /* Prevent ennemies from attacking the player to many times in a row */
  hitboxSkeleton.x = skeleton.x + 16;
  hitboxSkeleton.y = skeleton.y;
  if (hitboxPlayer.x < hitboxSkeleton.x + hitboxSkeleton.w 
      && hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton.x 
      && hitboxPlayer.y < hitboxSkeleton.y + hitboxSkeleton.h 
      && hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton.y) {
    hpPlayer -= 1;
  } else if (hitboxPlayer.x < hitboxBat1.x + hitboxBat1.w 
             && hitboxPlayer.x + hitboxPlayer.w > hitboxBat1.x 
             && hitboxPlayer.y < hitboxBat1.y + hitboxBat1.h 
             && hitboxPlayer.h + hitboxPlayer.y > hitboxBat1.y) {
    hpPlayer -= 1;
  } else if (hitboxPlayer.x < hitboxBat2.x + hitboxBat2.w 
             && hitboxPlayer.x + hitboxPlayer.w > hitboxBat2.x 
             && hitboxPlayer.y < hitboxBat2.y + hitboxBat2.h 
             && hitboxPlayer.h + hitboxPlayer.y > hitboxBat2.y) {
    hpPlayer -= 1;
  } else if (hitboxPlayer.x < hitboxBat3.x + hitboxBat3.w 
             && hitboxPlayer.x + hitboxPlayer.w > hitboxBat3.x 
             && hitboxPlayer.y < hitboxBat3.y + hitboxBat3.h 
             && hitboxPlayer.h + hitboxPlayer.y > hitboxBat3.y) {
    hpPlayer -= 1;
  } else {

    hpPlayer = hpPlayer;
  }
}

var heart = document.querySelector("#heart"),
    hpPlayer = 6;

function hp(){ /* changes the heart image depending on the player health */ 
  if (hpPlayer === 6)
  {
    heart.innerHTML = '<img src="../images/hp/hp6.png">';
  }
  else if (hpPlayer === 5)
  {
    heart.innerHTML = '<img src="../images/hp/hp5.png">';
  }
  else if (hpPlayer === 4)
  {
    heart.innerHTML = '<img src="../images/hp/hp4.png">';
  }
  else if (hpPlayer === 3)
  {
    heart.innerHTML = '<img src="../images/hp/hp3.png">';
  }
  else if (hpPlayer === 2)
  {
    heart.innerHTML = '<img src="../images/hp/hp2.png">';
  }
  else
  {
    heart.innerHTML = '<img src="../images/hp/hp1.png">';
  }
}