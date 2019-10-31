const ctx = document.getElementById('gamePage').getContext('2d');
let frames = 0;

const missileTemplate = new Image();
missileTemplate.src = './images/missile.png';

const carTemplate = new Image();
carTemplate.src = './images/car.png';

function drawSelf(obs) {
    ctx.drawImage(obs.img, obs.x, obs.y, obs.width, obs.height);
}
function mainLoop() {
    frames++;
    console.log('clearRect occurred.');
    ctx.clearRect(0, 0, 500, 500);

    // this is where we draw the car
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

function gameControls(e) {
    console.log(e.key);
    if (e.key === 'ArrowUp') {
        theGame.theCar.moveCar('y', -1);
    }
    if (e.key === 'ArrowDown') {
        theGame.theCar.moveCar('y', +1);
    }
    if (e.key === 'ArrowLeft') {
        theGame.theCar.moveCar('x', -1);
    }
    if (e.key === 'ArrowRight') {
        theGame.theCar.moveCar('x' + 1);
    }
}
document.onkeydown = gameControls;
