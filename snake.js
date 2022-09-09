class Snake {
  constructor(x, y, board){
      this.x = x;
      this.y = y;
      this.board = board;
      this.xVel = speed;
      this.yVel = 0;
      this.supposedDirection = 'right';
      this.realDirection = 'right';
      this.dead = false;
      // This can also be done with vectors, but I'm doing with arrays first
      this.tails = [new Tail(this.x - pixelSize, this.y, "right", "right", 3, 0),
                    new Tail(this.x - pixelSize * 2, this.y, "right", "right", 3, 0)];
      this.score = 0;
      this.turns = []
  }

  // ----------- DISPLAY --------------
  show(){
    // draw the head
    fill(0, 100, 0);
    rect(this.x, this.y, pixelSize, pixelSize);
  }

  showtail(tail){
    // draw the tail
    fill(100);
      rect(tail.x, tail.y, pixelSize, pixelSize);
  }

  // ----------- DIRECTION --------------

  updateDirection(){
    this.realDirection = this.supposedDirection;

    // update velocity based on direction
    if (this.realDirection == 'left'){
        this.xVel = -speed;
        this.yVel = 0;
      }
      else if (this.realDirection == 'right'){
        this.xVel = speed;
        this.yVel = 0;
      }

      else if (this.realDirection == 'up'){
        this.yVel = -speed;
        this.xVel = 0;
      }

      else if (this.realDirection == 'down'){
        this.yVel = speed;
        this.xVel = 0;
      }
  }

  // ------------- SCORE -----------------
  updateScore(){
    push();
    textSize(32);
    fill(0);
    text(this.score, totalPixels/2, totalPixels + 50);
    pop();
  }

  // ------------- DEATH -----------------
  checkDeath(){
    if (this.x < 0 || this.x > totalPixels - pixelSize || this.y < 0 || this.y > totalPixels - pixelSize){
      this.dead = true;
      this.xVel = 0;
      this.yVel = 0;
    }
  }

  die(){
    fill(255, 0, 0, 127);
    rect(0, 0, totalPixels, totalPixels);
  }


}
