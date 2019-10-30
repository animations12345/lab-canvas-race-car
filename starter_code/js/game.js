class Game {
  constructor() {
    this.theCar = new Car(100, 500);
    this.obstacleArray = [];
  }

<<<<<<< HEAD
    spawnObstacle() {
        let rX = Math.floor(Math.random() * 350) + 65;
        let rY = 0;
        let rWidth = Math.floor(Math.random() * 50) + 10;
        let rHeight = Math.floor(Math.random() * 50) + 10;
=======
  spawnObstacle() {
    let rX = Math.floor(Math.random() * 400);
    let rY = Math.floor(Math.random() * 400);
    let rWidth = Math.floor(Math.random() * 50) + 10;
    let rHeight = Math.floor(Math.random() * 50) + 10;
>>>>>>> 6159f98ef3cdc41a62ca01df24e2ef66d26d8c7a

    let newObstacle = new Obstacle(missileTemplate, rX, rY, rWidth, rHeight);
    this.obstacleArray.push(newObstacle);
    // newObstacle.drawMissile();
    newObstacle.moveDownForever();
  }
}
