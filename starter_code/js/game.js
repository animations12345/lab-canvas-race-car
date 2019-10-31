class Game {
    constructor() {
        this.theCar = new Car(carTemplate, 250, 400);
        this.obstacleArray = [];
    }

    spawnObstacle() {
        let rX = Math.floor(Math.random() * 350) + 65;
        let rY = 0;
        let rWidth = Math.floor(Math.random() * 50) + 10;
        let rHeight = Math.floor(Math.random() * 50) + 10;

        let newObstacle = new Obstacle(
            missileTemplate,
            rX,
            rY,
            rWidth,
            rHeight,
        );
        this.obstacleArray.push(newObstacle);
        newObstacle.moveDownForever();
    }
}
