class Obstacle {
    constructor(img, x, y, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveDownForever() {
        let travelDown = setInterval(() => {
            this.y += 10;
            if (this.y > 500) {
                clearInterval(travelDown);
            }
        }, 100);
    }
}
