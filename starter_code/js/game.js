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

    clearUnusedObstacles() {
        this.obstacleArray.forEach((ob, i) => {
            if (ob.y > 500) {
                this.obstacleArray.splice(i, 1);
            }
        });
    }

    collisionDetect(futureX, futureY) {
        let canMove = true;

        this.obstacleArray.forEach(obs => {
            console.log(
                futureX,
                futureY,
                this.theCar.width,
                this.theCar.height,
                obs.x,
                obs.y,
                obs.width,
                obs.height,
            );

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
