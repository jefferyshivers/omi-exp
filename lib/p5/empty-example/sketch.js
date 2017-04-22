
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadFont('assets/Satellite.otf', drawText);

  textAlign(CENTER)
  textSize(20);
}

function drawText(font) {
  fill('#ED225D');
  textFont(font, 36);
  text('p5*js', 10, 50);
}

function draw() {
  background(255);

  grid();

  stroke(255,0,0,20);
  line(0,mouseY,width,mouseY);
  line(mouseX,0,mouseX,height);


  stroke(255,0,0,40);
  line(20,110,200,110);

  // stroke(0,50,200,255);
  noStroke();
  fill(0,150,200,255);
  text("jeffery shivers", 100,80);
  text("other", 100,150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function grid() {
  stroke(0,180,255,50);
  noFill();
  for (i = 0; i < 50; i++) {
    for (j = 0; j < 40; j++) {
      ellipse(50*i,50*j,4,4);
    }
  }
}
