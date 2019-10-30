class Game {
  constructor() {
    this.theCar = new Car(100, 500);
    this.obstacleArray = [];
  }
  collisionDetect(futureX, futureY) {
    let canMove = true;

    this.obstacleArray.forEach(obs => {
      console.log(futureX, futureY, this.theCar.width, this.theCar.height, obs.x, obs.y, obs.width, obs.height);

      if (
        futureX + this.theCar.width >= obs.x &&
        futureX <= obs.x + obs.width &&
        futureY + this.theCar.height >= obs.y &&
        futureY <= obs.y + obs.height
      ) {
        canMove = false;
      }
    });

    return canMove;
  }
}
