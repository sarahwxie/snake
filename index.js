// currently, boardSize needs to be even
var boardSize = 20;
var pixelSize = 30;
var totalPixels = boardSize * pixelSize;
var speed = 3;

// in snake-copy (RIGHT OF THE SCREEN I will be attempting the following)

// make a grid to represent the board
// different characters will represent the snake
// the snake will move every frame
// but only when the snake is on the gridpixels, will calculations be done

// the board will have the entire board, with special characters for the head,
// tails, apples, turns and nothing

// the snake will behave similarly to how it does now, but every time it reaches
// a pixel, it will update everything


// this will also make it easier to implement apples



function preload (){
  // any required images go here
}

function setup(){
  // make sure audio doesn't have any errors
  mic = new p5.AudioIn();

  // creates the canvas
  window.canvas = createCanvas(totalPixels + 1, totalPixels + 80);

  // initialize the classess
  board = new Board();
  board.create();

  snake = new Snake(totalPixels/2, totalPixels/2, board);
  apple = new Apple();

  // update the board with the snake positions
  board.updateSnake(snake, apple);

}

function draw(){
  // the first thing you do is display the board
  background(173,216,230);
  board.show();

  // display the score
  snake.updateScore();

  // the game computations
  snake.checkDeath();
  if (snake.dead){
    snake.die();
  }
  else {
    // update the head position
    snake.x += snake.xVel;
    snake.y += snake.yVel;

    // draw the tails
    for (var i = 0; i < snake.tails.length; i++){
      snake.tails[i].x += snake.tails[i].xVel;
      snake.tails[i].y += snake.tails[i].yVel;
      snake.showtail(snake.tails[i]);
    }

    // every pixel, do your computations
    if (snake.y % pixelSize == 0 && snake.x % pixelSize == 0){
      board.updateSnake(snake, apple);
      snake.updateDirection();
    }
  }

  // show the snake and the apple last
  snake.show();
  apple.show();

}

function keyPressed(){
  if (keyCode == UP_ARROW && snake.realDirection != 'down'){
    snake.supposedDirection = 'up';
  }
  else if (keyCode == DOWN_ARROW && snake.realDirection != 'up'){
    snake.supposedDirection = 'down';
  }
  else if (keyCode == LEFT_ARROW && snake.realDirection != 'right'){
    snake.supposedDirection = 'left';
  }
  else if (keyCode == RIGHT_ARROW && snake.realDirection != 'left'){
    snake.supposedDirection = 'right';
  }
}
