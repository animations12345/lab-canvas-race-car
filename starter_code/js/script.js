window.onload = function() {
  document.getElementById("start-button").onclick = startGame;
  let theGame;
  function startGame() {
    theGame = new Game();
    mainLoop();
  }
};
