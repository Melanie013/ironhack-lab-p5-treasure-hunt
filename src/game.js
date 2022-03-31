class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line


    let lineX = 100
    let lineY = 100
    for (let i = 0; i < 9; i++) {
      line(lineX, 0, lineX, 1000)
      lineX +=100
    } 
    for (let i = 0; i < 9; i++) {
      line(0, lineY, 1000, lineY)
      lineY +=100
    }    
  }  
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
moveUp (){
  this.col -= 1
}

moveDown(){
  this.col += 1
}

moveLeft(){
  this.row -= 1

}

moveRight(){
  this.row += 1
}



}
