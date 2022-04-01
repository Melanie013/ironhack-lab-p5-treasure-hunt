const game = new Game();


function preload() {
// console.log('this is the preload')
game.player.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.draw();
}


