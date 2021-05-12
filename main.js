// Tutorial: 
// https://www.youtube.com/watch?v=6TPVoB4uQCU

let angle = 0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(175);
  rectMode(CENTER);
  normalMaterial();
  fill(215, 215, 50);
  rotate(angle * 0.01);
  rotateX(angle * 0.01);
  rotateY(angle);
  torus(100, 10);
  angle += 0.04;
}