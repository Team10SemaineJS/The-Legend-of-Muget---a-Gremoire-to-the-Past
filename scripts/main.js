var screenGame = document.querySelector('#screenGame'),
    posX = 50,
    posY = 40,
    dirX = 8,
    dirY = 8,
    update = 40,
    widthScreenGame = 1000,
    heightScreenGame = 700,
    player = document.querySelector('#player'),
    pressingUp = false,
    pressingDown = false,
    pressingLeft = false,
    pressingRight = false;
    
init();
function init(){
    screenGame.style.width=widthScreenGame+"px";
    screenGame.style.height=heightScreenGame+"px";
    player.style.left=posX+"px";
    player.style.top=posY+"px";
    setInterval(
        function()
    {
       updatePlayerPosition();
    }
    ,
    update 
    );
}