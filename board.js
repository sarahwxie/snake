class Board {
  constructor(){
      this.gridArray = [];
  }

  create(){
    // draw the grid
    for (var x = 0; x < boardSize * pixelSize; x += pixelSize ){
      for (var y = 0; y < boardSize * pixelSize; y += pixelSize){
        // creates a vector (read: set of coordinates) in the grid
        var p = createVector(x,y);

        // push it to the array of vectors
        this.gridArray.push(p);
      }
    }

  }

  show(){
    for(var i = 0; i < this.gridArray.length; i++){ //go through all our positions
      fill(255);
      rect(this.gridArray[i].x, this.gridArray[i].y, pixelSize, pixelSize); //put a circle at each of them
    }

  }

}
