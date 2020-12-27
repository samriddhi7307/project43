function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  let hr = hour();
  let mn = minute();
  let sc = second();

//fill(255);
//noStroke();
//text(hr + ':' + mn + ':' + sc,10,200); 
  translate(200,200);
  rotate(-90);

  stroke(255,0,0);
  strokeWeight(7)
  end1 = map(sc,0,60,0,360);
  noFill();
  arc(0,0,300,300,0,end1);
  push();
  rotate(end1);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(0,255,0);
  end2 = map(mn,0,60,0,360);
  noFill();
  arc(0,0,315,315,0,end2);
  push();
  rotate(end2);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(0,0,255);
  end3 = map(hr % 12,0,12,0,360);
  noFill();
  arc(0,0,330,330,0,end3);
  push();
  rotate(end3);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

   drawSprites();
}
