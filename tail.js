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
    switch(this.realDirection){
      case "right":
        this.xVel = speed;
        this.yVel = 0;
        break;
      case "left":
        this.xVel = -speed;
        this.yVel = 0;
        break;
      case "up":
        this.yVel = -speed;
        this.xVel = 0;
        break;
      case "down":
        this.yVel = speed;
        this.xVel = 0;
        break;
    }
  }
}
