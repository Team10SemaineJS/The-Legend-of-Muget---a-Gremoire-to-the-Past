var canvas= document.querySelector("canvas"),
    context= canvas.getContext("2d"),
    playerSprite = new Image(),
    skeletonSprite = new Image(),
    batSprite = new Image(),
    player = {},
    skeleton = {},
    bat = {},
    bat1 = {},
    bat2 = {},
    bat3 = {},
    spdPlayer = 2,
    spdSkeleton = 0.6,
    step = 1,
    srcSpriteX = 0,
    srcSpriteY = 0,
    minStep = 50,
    maxStep = 100,
    hpPlayer = 6,
    score = document.querySelector('#score'),
    scorePoints = 0,
    container = document.querySelector(".container"),
    musicTheme = new Audio(),
    musicEnd = new Audio();

canvas.width = 1024;   /* Setting size of the game zone */
canvas.height = 512;

init();
function init() { /* Initiates each variables for the canvas */
  player.image = '../images/sprites/player.png';
  player.x = 470;
  player.y = 260;
  player.width = 64;
  player.height = 64;
  player.pressingUp = false;
  player.pressingDown = false;
  player.pressingLeft = false;
  player.pressingRight = false;
  playerSprite.src = player.image;
  skeleton.image = '../images/sprites/skeleton.png';
  skeleton.x = 506;
  skeleton.y = -100;
  skeleton.width = 64;
  skeleton.height = 64;
  skeletonSprite.src = skeleton.image;
  bat.image = '../images/sprites/bat.png';
  bat.x = 146;
  bat.y = 426;
  bat1.x = 750;
  bat1.y = 240;
  bat2.x = 278;
  bat2.y = 142;
  bat3.x = 642;
  bat3.y = 450;
  bat.width = 64;
  bat.height = 32;
  batSprite.src = bat.image;
  musicTheme.volume = 0.15;
  musicTheme.src = '../sounds/theme.wav';
  musicEnd.volume = 0.15;
  musicEnd.src = '../sounds/gameOver.wav';
  window.requestAnimationFrame(loop);
}


function loop() { /* Repeat the functions in the loop function */
  context.clearRect(0, 0, canvas.width, canvas.height); // clear previous image to not have duplication from the draw function
  if (hpPlayer > 0){ // first part of the loop when player is alive
    scorePoints++; // imcrements score
    collision();
    collisionBorder();
    entitiesMove();
    entitiesDraw();
    hp();
    musicTheme.play(); // plays a music while player is alive
    score.innerHTML = '<p>Score = ' + scorePoints + '</p>';
  } else { //second part of the loop when player is dead
    heart.style.display = "none";
    container.style.background = 'url(../images/gameOver.png)';
    musicTheme.pause(); // pause the previous sound or he will continue until it finishes even on the game over window
    musicEnd.play(); // plays a music when Game Over
  }
  window.requestAnimationFrame(loop);
}

loop();