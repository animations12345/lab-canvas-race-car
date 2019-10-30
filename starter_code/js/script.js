window.onload = function() {
<<<<<<< HEAD
    const ctx = document.getElementById('gamePage').getContext('2d');
    let frames = 0;
    function mainLoop() {
        frames++;
        console.log('clearRect occurred.');
        ctx.clearRect(0, 0, 200, 500);

        // this is where we draw the hero
        // drawSelf(theGame.theHero, false);
        // then we draw all the obstacles
        // theGame.obstacleArray.forEach(eachObstacle => {
        //     drawSelf(eachObstacle, true);
        // });

        // if (frames % 100 === 0) {
        //     theGame.spawnObstacle();
        // }

        requestAnimationFrame(mainLoop);
    }

    document.getElementById('start-button').onclick = startGame;
    let theGame;
    function startGame() {
        theGame = new Game();
        mainLoop();
    }
=======
  document.getElementById("start-button").onclick = startGame;
  let theGame;
  function startGame() {
    theGame = new Game();
  }
>>>>>>> 3894283a7514d0913465384dbfd84d4c04e1272b
};
