class Obstacle {
    constructor(img, x, y, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    // drawMissile() {
    //     this.img.onload = () => {
    //         ctx.drawImage(this.img, this.x, this.y);
    //     };
    // }
    moveDownForever() {
        let travelDown = setInterval(() => {
            //    each setInterval function gets a unique ID
            // were using blah here to save this ID
            this.y += 10;

            if (this.y > 500) {
                clearInterval(travelDown);
            }
        }, 100);
    }
}
