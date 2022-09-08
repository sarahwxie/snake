class Snake {
  constructor(x,y){
      this.x = x;
      this.y = y;
      this.xVel = speed;
      this.yVel = 0;
      this.key = 'right';
      this.dead = false;
      // This can also be done with vectors, but I'm doing with arrays first
      this.tails = [new Tail(this.x - pixelSize, this.y, "right", "right"),
                    new Tail(this.x - pixelSize * 2, this.y, "right", "right")];
      this.score = 0;
      this.turns = []
  }

  show(){
    fill(0, 100, 0);
    rect(this.x, this.y, pixelSize, pixelSize);

    // draw the tail
    for (let i = 0; i < this.tails.length; i++){
      // this.tails[i] = {x, y, direction}
      rect(this.tails[i].x, this.tails[i].y, pixelSize, pixelSize);
    }
  }


  playTails(){
    // for each tail
    for (let i = 0; i < this.tails.length; i++){
      // this.tails[i] = [x, y]

      // look into the turns
      for (let j = 0; j < this.turns.length; j++){
        // this.turns[i] = [x, y, direction, counter]
        // change the tails direction if it matches a turn coordinate
        if (this.tails[i].x == this.turns[j].x && this.tails[i].y == this.turns[j].y){
          this.tails[i].direction = this.turns[j].direction;

          // amount of tails that has passed the point have increased
          this.turns[j].counter += 1;
        }
      }

      // match currdirection and direction on the pixels
      this.tails[i].matchDirections(this.x, this.y);

      // Move the tail based on it's currdirection
      this.tails[i].move();
    }
  }

  playHead(){
    // update the positions
    this.x += this.xVel;
    this.y += this.yVel;

    // change the velocity at the pixels
    if (this.y % pixelSize == 0 && this.x % pixelSize == 0){
      if (this.key == 'left'){
        this.xVel = -speed;
        this.yVel = 0;
      }
      else if (this.key == 'right'){
        this.xVel = speed;
        this.yVel = 0;
      }

      else if (this.key == 'up'){
        this.yVel = -speed;
        this.xVel = 0;
      }

      else if (this.key == 'down'){
        this.yVel = speed;
        this.xVel = 0;
      }
    }
  }


  // helper functions that I can lowkey forget about
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

  changeDirection(key){
    this.key = key;
    this.turns.push(new Turn(this.x, this.y, this.key, 0));
  }

  updateCounters(){
    for (let j = 0; j < this.turns.length; j++){
      if (this.turns[j].counter > this.tails.length){
          this.turns.splice(j, 1);
      }
    }
  }

  update(){
    this.checkDeath();
    if (this.dead){
      this.die();
    }
    else {
      this.play();
    }
  }

  // the allmightly play function
  play(){

    this.playTails();
    this.updateCounters();
    this.playHead();
  }
}
