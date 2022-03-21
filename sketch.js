let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let img;
let y = 100;

function preload() {
  img = loadImage("Mortals.png");
}

function setup() {
  createCanvas(700, 400);
  frameRate(30);
 
  imageMode (CENTER);
  for (let i = 20; i < 10; i--) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);

  }
  walls.push(new Boundary(1, 1, width, 1));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));
  particle = new Particle();
}

function draw() {
  background('black');
  for (let wall of walls) {
    wall.show();
  }
  particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show();
  particle.look(walls);

  xoff += 20.31;
  yoff += 10.41;

  image(img, 350, 200, 700, 400);
  stroke('yellowgreen');
  y = y - 10;
  if (y < 0) {
    y = height;
  }
  line(-100, y, width, y);
  line(-300, y, width, y);
  line(-500, y, width, y);
  line(0, y, width, y);
 

  
}
//source code:
//https://p5js.org/examples/structure-loop.html
//https://github.com/CodingTrain/website/blob/main/CodingChallenges/CC_145_Ray_Casting/P5/ray.js
