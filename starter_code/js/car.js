const canvas = document.getElementById("gamePage").getContext("2d");
const img = new Image();
img.src = "./images/car.png";
img.onload = () => {
  ctx.drawImage(img, 250, 400, 75, 75);
};

class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
Car.prototype.move = moveCar;

function moveCar(futureX, futureY) {
  if (futureX + this.width <= 500 && futureX >= 0 && futureY + this.height <= 500 && futureY >= 0) {
    this.x = futureX;
    this.y = futureY;
  }
}

document.onkeydown = function(e) {
  if (e.key === "ArrowUp") {
    theGame.theCar.x++;
  }
  if (e.key === "ArrowDown") {
    theGame.theCar.move(theGame.theCar.x, theGame.theCar.y);
  }
  if (e.key === "ArrowLeft") {
    theGame.theCar.move(theGame.theCar.x, theGame.theCar.y);
  }
  if (e.key === "ArrowRight") {
    theGame.theCar.move(theGame.theCar.x, theGame.theCar.y);
  }
};
