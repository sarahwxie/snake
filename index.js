// currently, boardSize needs to be even
var boardSize = 20;
var pixelSize = 30;
var totalPixels = boardSize * pixelSize;
var speed = 3;

// what do I need:

// the tail has correct turning
// it dies when it hits itself
// generate apples
// the apples dissapear when the snake hits them
// for every apple, the score increases
// make it pretty


function preload (){
  // any required images go here
}

function setup(){
  // make sure audio doesn't have any errors
  mic = new p5.AudioIn();

  // creates the canvas
  window.canvas = createCanvas(totalPixels + 10, totalPixels + 10);

  // initialize the classess
  board = new Board();
  board.create();

  snake = new Snake(totalPixels/2, totalPixels/2);

}

function draw(){
  background(130);
  board.show();

  snake.update();
  snake.show();

}

function keyPressed(){
  switch(keyCode) {
      case UP_ARROW:
        snake.changeDirection('up');
        break;
      case LEFT_ARROW:
        snake.changeDirection('left');
        break;
      case DOWN_ARROW:
        snake.changeDirection('down');
        break;
      case RIGHT_ARROW:
        snake.changeDirection('right');
        break;
  }
}
