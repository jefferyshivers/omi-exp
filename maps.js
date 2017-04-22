



function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '5')

  site_title = select('#btn-group');
}

function draw() {
  clear();

  strokeWeight(200);
  stroke(0);
  line(0,0,width,height);

}
