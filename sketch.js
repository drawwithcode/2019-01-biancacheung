function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background("#F5F5F5");


  frameRate(12);
 }

function draw() {
  push();

  translate(width / 2, height / 2);
  rotate(120);
  noFill();
  stroke (lerpColor(color ("#D3AB9E"), color ("#EAC9C1"),frameCount / 72));
  line(width / 5, 0, cos(frameCount * 5) * width / 5, sin(frameCount * 5) * width / 5);
  pop();

    translate(width / 2, height / 2);
    rotate(60);
    noFill();
    stroke (lerpColor(color ("#E2B4BD"), color ("#B5838D"),frameCount / 72));
    line(width / 5, 0, cos(frameCount * -5) * width / 5, sin(frameCount * -5) * width / 5);
    pop();

    if (frameCount==73){
      noLoop();

    }
}
