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
    // iterate through the grid
    for (var x = 0; x < boardSize * pixelSize; x += pixelSize ){
      for (var y = 0; y < boardSize * pixelSize; y += pixelSize){
        // x and y are the coordinates

        // update the position of the snake's head
        if (snake.x == x && snake.y == y){
          this.gridArray[x/pixelSize][y/pixelSize] = 'H';
        }

        // check if the head is at the apples
        if (snake.x == apple.x && snake.y == apple.y){
          this.updateApple(apple);
          snake.score += 1;
        }
      }
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
      while(this.gridArray[x][y] != ' ')

      // write to the apple
      apple.x = x * pixelSize;
      apple.y = y * pixelSize;

  }

}
