class Board {
  constructor(){
      this.gridArray = [];
  }

  create(){
    // draw the grid
    for (var x = 0; x < boardSize * pixelSize; x += pixelSize ){
      var row = [];
      for (var y = 0; y < boardSize * pixelSize; y += pixelSize){
        // push a blank square
        row.push(' ');
      }
      this.gridArray.push(row);
    }
  }

  show(){
    for(var x = 0; x < boardSize; x++){ //go through all our positions
      for (var y = 0; y < boardSize; y++){
        // draw the grid square
        fill(255);
        rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  // update the position of the head
  updateSnake(snake, apple){
    // update the counter for all the turns
    for (var i = 0; i < snake.turns.length; i++){
      snake.turns[i].counter ++;
      if (snake.turns[i].counter > snake.score + 2){
        snake.turns.splice(i, 1);
      }
    }

    // iterate through the grid
    for (var x = 0; x < boardSize * pixelSize; x += pixelSize){
      for (var y = 0; y < boardSize * pixelSize; y += pixelSize){
        // x and y are the coordinates

        // why is it sideways when I console.log (ASK)
        // update the position of the snake's head
        if (snake.x == x && snake.y == y){
          if (this.gridArray[y/pixelSize][x/pixelSize] == 'T' || this.gridArray[y/pixelSize][x/pixelSize] == 'O'){
            snake.die();
          }
          this.gridArray[y/pixelSize][x/pixelSize] = 'H';
        }
        // set it to blank to reset
        else {
          this.gridArray[y/pixelSize][x/pixelSize] = ' ';
        }

        // position of the tails
        for (var i = 0; i < snake.tails.length; i++){
          if (snake.tails[i].x == x && snake.tails[i].y == y){
            this.gridArray[y/pixelSize][x/pixelSize] = 'T';
          }
        }

        // position of the turns
        for (var i = 0; i < snake.turns.length; i++){
          if (snake.turns[i].x == x && snake.turns[i].y == y){
            this.gridArray[y/pixelSize][x/pixelSize] = 'O';
            // update the direction of the tails
            snake.updateTailDirection(snake.turns[i]);
          }
        }

      }
    }

    // check if the head is at the apples
    if (snake.x == apple.x && snake.y == apple.y){
      this.updateApple(apple);
      snake.addTail();
      snake.score += 1;
    }

  }

  updateApple(apple){
      // create a random apple
      var x = 0;
      var y = 0;
      do {
        x = int(random(boardSize));
        y = int(random(boardSize));
      }
      // check to make sure that the coordinates aren't filled
      while(this.gridArray[y][x] != ' ');
      // write to the apple
      apple.x = x * pixelSize;
      apple.y = y * pixelSize;

  }

}
