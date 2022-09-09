class Tail {
  constructor(x,y, realDirection, xVel, yVel){
      this.x = x;
      this.y = y;
      this.realDirection = realDirection;
      this.xVel = xVel;
      this.yVel = yVel;
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
