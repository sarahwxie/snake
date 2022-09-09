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
      this.tails = [new Tail(this.x - pixelSize, this.y, "right", speed, 0),
                    new Tail(this.x - pixelSize * 2, this.y, "right", speed, 0)];
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
    // update the head direction
    if (this.realDirection != this.supposedDirection){
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

        // create a turn
        var turn = new Turn(this.x, this.y, this.realDirection, 0);
        this.turns.push(turn);
    }

  }

  updateTailDirection(turn){
    // update the tail direction
    for (var i = 0; i < this.tails.length; i++){
      console.log("updating turns for: ");
      if (turn.x == this.tails[i].x && turn.y == this.tails[i].y){
        console.log(this.tails);
        this.tails[i].realDirection = turn.direction;
        this.tails[i].move();
      }
    }

  }
  // ------------- TAIL ------------------
  addTail(){
    var lastTail = this.tails[this.tails.length - 1];
    var xAlter, yAlter, xVel, yVel;
    var yAlter;
    switch(lastTail.realDirection){
      case "right":
        xAlter = -pixelSize;
        yAlter = 0;
        xVel = speed;
        yVel = 0;
        break;
      case "left":
        xAlter = pixelSize;
        yAlter = 0;
        xVel = -speed;
        yVel = 0;
        break;
      case "up":
        yAlter = pixelSize;
        xAlter = 0;
        xVel = 0;
        yVel = -speed;
        break;
      case "down":
        yAlter = -pixelSize;
        xAlter = 0;
        xVel = 0;
        yVel = speed;
        break;
    }
    var tail = new Tail(lastTail.x + xAlter, lastTail.y + yAlter, lastTail.realDirection , xVel, yVel);
    this.tails.push(tail);
    console.log(this.tails);
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
