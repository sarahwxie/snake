class Tail {
  constructor(x,y, supposedDirection, realDirection, xVel, yVel){
      this.x = x;
      this.y = y;
      this.supposedDirection = supposedDirection;
      this.realDirection = realDirection;
      this.xVel = xVel;
      this.yVel = yVel;
  }

  matchDirections(x, y){
    if (y % pixelSize == 0 && x % pixelSize == 0){
      if (this.currdirection != this.direction){
        this.currdirection = this.direction;
      }
    }
  }

  move(){
    switch(this.currdirection){
      case "right":
        this.x += speed;
        break;
      case "left":
        this.x -= speed;
        break;
      case "up":
        this.y -= speed;
        break;
      case "down":
        this.y += speed;
        break;
    }
  }
}
