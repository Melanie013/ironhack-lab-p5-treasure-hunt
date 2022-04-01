class Game {
  constructor(){

    this.player = new Player(200, 100)

  }

  draw() {
    // clear();
    this.player.draw()
  }


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
    this.width = 100
    this.height = 100
    this.image

  }


  preload() {

    this.image = loadImage('assets/character-down.png')
  
  
  }

moveUp (){
  this.col -= 100
}

moveDown(){
  this.col += 100
}

moveLeft(){
  this.row -= 100

}

moveRight(){
  this.row += 100
}

draw() {
  // console.log('hallo')

  image(this.image, this.col, this.row, this.width, this.height)
}



}
