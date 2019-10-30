const ctx = document.getElementById('gamePage').getContext('2d');
let frames = 0;

const missileTemplate = new Image();
missileTemplate.src = './images/missile.png';
function drawSelf(obs) {
    if (obs) {
        ctx.drawImage(obs.img, obs.x, obs.y);
    } else {
        ctx.drawImage();
    }
}
function mainLoop() {
    frames++;
    console.log('clearRect occurred.');
    ctx.clearRect(0, 0, 500, 500);

    // this is where we draw the hero
    drawSelf(theGame.theCar, false);
    // then we draw all the obstacles
    theGame.obstacleArray.forEach(eachObstacle => {
        drawSelf(eachObstacle, true);
    });

    if (frames % 100 === 0) {
        theGame.spawnObstacle();
    }

    requestAnimationFrame(mainLoop);
}

document.getElementById('start-button').onclick = startGame;
let theGame;
function startGame() {
    theGame = new Game();
    mainLoop();
}
