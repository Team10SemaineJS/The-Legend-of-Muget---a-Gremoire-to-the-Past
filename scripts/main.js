var canvas= document.querySelector("canvas"),
    context= canvas.getContext("2d"),
    playerSprite = new Image(),
    skeletonSprite = new Image(),
    player = {},
    skeleton = {},
    skeleton2 = {},
    skeleton3 = {},
    spdPlayer = 1,
    spdSkeleton1 = 0.1 + Math.random()*0.4,
    spdSkeleton2 = 0.1 + Math.random()*0.4,
    spdSkeleton3 = 0.1 + Math.random()*0.4,
    step = 1,
    srcSpriteX = 0,
    srcSpriteY = 0,
    minStep = 50,
    maxStep = 100,
    hitboxPlayer = {x:485, y:260, w:34, h:64},
    hitboxSkeleton = {x:35, y:20, w:34, h:64},
    hitboxSkeleton2 = {x:35, y:20, w:34, h:64},
    hitboxSkeleton3 = {x:35, y:20, w:34, h:64},
    hpPlayer = 6,
    hpEnemies = 3,
    clickWait = true,
    container = document.querySelector(".container");

canvas.width = 1024;
canvas.height = 512;

init();
function init() {
  player.image = 'images/sprites/player.png';
  player.x = 470;
  player.y = 260;
  player.width = 64;
  player.height = 64;
  player.pressingUp = false;
  player.pressingDown = false;
  player.pressingLeft = false;
  player.pressingRight = false;
  playerSprite.src = player.image;
  skeleton.image = 'images/sprites/skeleton.png';
  skeleton.x = 506;
  skeleton.y = -100;
  skeleton.width = 64;
  skeleton.height = 64;
  skeleton2.image = 'images/sprites/skeleton.png';
  skeleton2.x = -100;
  skeleton2.y = 256;
  skeleton2.width = 64;
  skeleton2.height = 64;
  skeleton3.image = 'images/sprites/skeleton.png';
  skeleton3.x = 1124;
  skeleton3.y = 100;
  skeleton3.width = 64;
  skeleton3.height = 64;
  skeletonSprite.src = skeleton.image;
  window.requestAnimationFrame(loop);
}

function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (hpPlayer > 0){
    collision();
    collisionBorder();
    entitiesMove();
    drawEntities();
    hp();
  } else {
    heart.style.display = "none";
    container.style.background = 'url(images/gameOver.png)';
  }
  window.requestAnimationFrame(loop);
}

loop();


canvas.addEventListener(
  'click',
  function(){
    if (clickWait === true && hpEnemies > 0){
      hpEnemies -= 1;
      console.log(hpEnemies);
      clickWait = false;
    }
  }
)

var playerAttack = setInterval(function(){delayClick()}, 15000);

function delayClick(){
  if (clickWait === false){
    console.log("ready");
    clickWait = true;
  }
}













