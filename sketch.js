function setup() {
  createCanvas(400, 400);
  background(79, 117, 89);
}

function draw() { 

  noStroke(0,mouseY/2,mouseX/3+mouseY);
  fill(0,mouseX/3,0);
  ellipse(mouseX,mouseY,mouseY/10, mouseX/10);
 
  noStroke();
  //back hair
  fill(38, 16, 7);
  rect(85, 90, 230, 180);

  //shoulder
  fill(201, 165, 113);
  arc(200, 300, 200, 110, 0, HALF_PI + HALF_PI);

  //ears
  fill(204, 169, 120);
  ellipse(100, 225, 40, 25);
  ellipse(300, 225, 40, 25);

  //face
  fill(204, 169, 120);
  ellipse(200, 200, 180, 200);
  arc(200, 252, 100, 110, 0, HALF_PI + HALF_PI); //chin

  //front hair
  fill(38, 16, 7);
  rect(85, 90, 230, 50);

  //eyes
  fill(82, 63, 36);
  ellipse(150, 190, 25, 20); //left
  ellipse(250, 190, 25, 20); //right

  //brows
  fill(66, 45, 15);
  rect(130, 160, 42, 5); //left brow
  rect(228, 160, 42, 5); //right brow

  //makeup
  fill("#222222");
  rect(125, 180, 33, 5); //left eyeliner
  rect(244, 180, 33, 5); //right eyeliner

  fill(240, 149, 194);
  ellipse(140, 225, 40, 25); //left blush
  ellipse(260, 225, 40, 25); //right blush

  //freckles:
  fill(196, 137, 102);

  //-left side
  ellipse(140, 225, 5, 5); //right freckle
  ellipse(120, 225, 5, 5); //left freckle
  ellipse(130, 215, 5, 5); //top freckle
  ellipse(130, 235, 5, 5); //bottom freckle
  //-right side
  ellipse(260, 225, 5, 5); //left freckle
  ellipse(270, 215, 5, 5); //top freckle
  ellipse(270, 235, 5, 5); //bottom freckle
  ellipse(280, 225, 5, 5); //right freckle

  //lips
  stroke(99, 24, 16); //outline of the lips
  strokeWeight(3);
  fill(105, 35, 28);
  ellipse(200, 265, 40, 25); //lips
  noStroke();
  fill(99, 24, 16);
  rect(170, 263, 61, 5); //line

  //septum piercing
  noFill();
  stroke(242, 239, 237);
  ellipse(200, 235, 7, 7);

  //nose
  noStroke();
  fill(196, 137, 102);
  ellipse(200, 222, 25, 25);

  //ear piercings
  noFill();
  stroke(242, 239, 237);
  ellipse(100, 235, 7, 7); //left piercing
  ellipse(300, 235, 7, 7); //right piercing
  fill(242, 239, 237);
  rect(85, 225, 3, 2); //top left piercing

  //highlights
  fill(255, 255, 255);
  noStroke();
  ellipse(145, 190, 4, 4); //left eye
  ellipse(245, 190, 4, 4); //right eye
}
