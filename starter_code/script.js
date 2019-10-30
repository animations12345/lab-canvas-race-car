window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.getElementById("start").onclick = startGame;
  let theGame;
  function startGame() {
    theGame = new Game();
    mainLoop();
  }
};
