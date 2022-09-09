class Apple {
  constructor(){
      this.x = totalPixels - pixelSize * (boardSize/4);
      this.y = totalPixels/2;
  }

  show(){
    fill(150, 0, 0);
    rect(this.x, this.y, pixelSize, pixelSize);
  }

}
