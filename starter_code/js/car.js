// const img = new Image();
// img.src = "./images/car.png";
// img.onload = () => {
//   ctx.drawImage(img, 250, 400, 75, 75);
// };

class Car {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 90;
    }
    // loadCar = () => {
    //     this.onload = () => {
    //         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //     };
    // };
    moveCar = (direction, value, futureX, futureY) => {
        if (
            futureX + this.width <= 400 &&
            futureX >= 0 &&
            futureY + this.height <= 400 &&
            futureY >= 0
        ) {
            this.x = futureX;
            this.y = futureY;
        }
        this[direction] += value;
        console.log(this);
    };

    // drawCar = () => {
    //     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // };
    // function(animate) {
    //     window.requestAnimationFrame(animate);
    //     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // }
}
