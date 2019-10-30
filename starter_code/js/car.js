const canvas = document.getElementById("gamePage").getContext("2d");
// const img = new Image();
// img.src = "./images/car.png";
// img.onload = () => {
//   ctx.drawImage(img, 250, 400, 75, 75);
// };

class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  loadCar = () => {
    const canvas = document.getElementById("gamePage").getContext("2d");
    const img = new Image();
    img.src = "./images/car.png";
    img.onload = () => {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
  };
  moveCar = (direction, value) => {
    this[direction] -= 1;
    console.log(this);
  };

  drawCar = () => {
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  };
  function(animate) {
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
let camero = new Car(250, 400, 50, 90);
camero.loadCar();

function gameControls(e) {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    camero.moveCar("y", -1);
  }
  if (e.key === "ArrowDown") {
    camero.moveCar("y", +1);
  }
  if (e.key === "ArrowLeft") {
    camero.moveCar("x", -1);
  }
  if (e.key === "ArrowRight") {
    camero.moveCar("x" + 1);
  }
}
document.onkeydown = gameControls;
