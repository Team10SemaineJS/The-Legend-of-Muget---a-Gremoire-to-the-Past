var hitboxPlayer = {x:485, y:260, w:34, h:64};
var hitboxSkeleton = {x:35, y:20, w:34, h:64};
var hitboxSkeleton2 = {x:35, y:20, w:34, h:64};
var hitboxSkeleton3 = {x:35, y:20, w:34, h:64};
var hpPlayer = 6;

var attack = setInterval(function(){ hitbox()}, 700);
function hitbox() {
  hitboxSkeleton.x = skeleton.x + 15;
  hitboxSkeleton.y = skeleton.y + 15;
  if (hitboxPlayer.x < hitboxSkeleton.x + hitboxSkeleton.w &&
      hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton.x &&
      hitboxPlayer.y < hitboxSkeleton.y + hitboxSkeleton.h &&
      hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton.y) {
    console.log("Skeleton 1 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
  } else {
    var d=5;
  }

  hitboxSkeleton2.x = skeleton2.x + 15;
  hitboxSkeleton2.y = skeleton2.y + 15;
  if (hitboxPlayer.x < hitboxSkeleton2.x + hitboxSkeleton2.w &&
      hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton2.x &&
      hitboxPlayer.y < hitboxSkeleton2.y + hitboxSkeleton2.h &&
      hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton2.y) {
    console.log("Skeleton 2 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
  } else {
    var d=5;
  }

  hitboxSkeleton3.x = skeleton3.x + 15;
  hitboxSkeleton3.y = skeleton3.y + 15;
  if (hitboxPlayer.x < hitboxSkeleton3.x + hitboxSkeleton3.w &&
      hitboxPlayer.x + hitboxPlayer.w > hitboxSkeleton3.x &&
      hitboxPlayer.y < hitboxSkeleton3.y + hitboxSkeleton3.h &&
      hitboxPlayer.h + hitboxPlayer.y > hitboxSkeleton3.y) {
    console.log("Skeleton 3 attacks");
    hpPlayer -= 1;
    console.log(hpPlayer);
  } else {
    var d=5;
  }
}




