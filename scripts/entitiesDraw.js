var hpEnemies = 3;


function drawEntities() {
  playerDraw();
  skeletonDraw();
  skeletonDraw2();
  skeletonDraw3();
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
    switchSprite();
  } else if (player.pressingRight) {
    srcSpriteY = player.height; //Spritesheet row2
    switchSprite();
  } else if (player.pressingLeft) {
    srcSpriteY = player.height * 2; //Spritesheet row3
    switchSprite();
  } else if (player.pressingUp) {
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



var srcSpriteSkeletonX = 0;
var srcSpriteSkeletonY = 0;

function skeletonDraw() {
    skeletonDraw.srcSpriteX = srcSpriteSkeletonX;
    skeletonDraw.srcSpriteY = srcSpriteSkeletonY;
    directionSpritePlayer(); //Sprite switch
    context.drawImage(skeletonSprite, skeletonDraw.srcSpriteX, skeletonDraw.srcSpriteY, skeleton.width, skeleton.height, skeleton.x, skeleton.y, skeleton.width, skeleton.height);
  }

function skeletonDraw2() {
    skeletonDraw2.srcSpriteX = srcSpriteSkeletonX;
    skeletonDraw2.srcSpriteY = srcSpriteSkeletonY;
    directionSpritePlayer(); //Sprite switch
    context.drawImage(skeletonSprite, skeletonDraw.srcSpriteX, skeletonDraw.srcSpriteY, skeleton2.width, skeleton2.height, skeleton2.x, skeleton2.y, skeleton2.width, skeleton2.height);
  }

function skeletonDraw3() {
    skeletonDraw3.srcSpriteX = srcSpriteSkeletonX;
    skeletonDraw3.srcSpriteY = srcSpriteSkeletonY;
    directionSpritePlayer(); //Sprite switch
    context.drawImage(skeletonSprite, skeletonDraw.srcSpriteX, skeletonDraw.srcSpriteY, skeleton3.width, skeleton3.height, skeleton3.x, skeleton3.y, skeleton3.width, skeleton3.height);
  }



function directionSpriteSkeleton(){
  if(diffX >= 0 && diffY >= 0)
  {
    srcSpriteSkeletonY = skeleton.height * 0;
  } else if(diffX > 0 && diffY < 0 || diffX > 0 && diffY == 0 || diffX > 0 && diffY > 0)
  {
    srcSpriteSkeletonY = skeleton.height * 1;
  } else if(diffX < 0 && diffY < 0 || diffX < 0 && diffY == 0 || diffX < 0 && diffY > 0)
  {
    srcSpriteSkeletonY = skeleton.height * 2;
  } else
  {
    srcSpriteSkeletonY = skeleton.height * 3;
  }
}



var attack = setInterval(function(){ hitbox()}, 1000);
function hitbox() {

  hitboxSkeleton.x = skeleton.x + 15;
  hitboxSkeleton.y = skeleton.y;
  hitboxSkeleton2.x = skeleton2.x + 15;
  hitboxSkeleton2.y = skeleton2.y;
  hitboxSkeleton3.x = skeleton3.x + 15;
  hitboxSkeleton3.y = skeleton3.y;
  if (hpEnemies > 0 && hitboxPlayer.x < hitboxSkeleton.x + hitboxSkeleton.w &&
      hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton.x &&
      hitboxPlayer.y < hitboxSkeleton.y + hitboxSkeleton.h &&
      hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton.y){
        console.log("Skeleton 1 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
  } else if (hpEnemies > 0 && hitboxPlayer.x < hitboxSkeleton2.x + hitboxSkeleton2.w &&
      hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton2.x &&
      hitboxPlayer.y < hitboxSkeleton2.y + hitboxSkeleton2.h &&
      hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton2.y) {
    console.log("Skeleton 2 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
  } else if (hpEnemies > 0 
             && hitboxPlayer.x < hitboxSkeleton3.x + hitboxSkeleton3.w 
             && hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton3.x 
             && hitboxPlayer.y < hitboxSkeleton3.y + hitboxSkeleton3.h 
             && hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton3.y) {
    console.log("Skeleton 3 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
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

