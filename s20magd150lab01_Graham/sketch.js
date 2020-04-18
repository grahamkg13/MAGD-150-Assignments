function setup() {
  createCanvas(500,600);
  strokeWeight(2.5);
}

//Main House
function draw() {
  background(245);
  
  //Rectangular shape
  fill(195);
  rect(150,190,200,280);
  
  //Making roof
  fill(120);
  triangle(250,100,120,200,380,200);
  
  //Windows
  strokeJoin(BEVEL);
  fill(250);
  rect(180,230,45,50);
  rect(275,230,45,50);
  
  //window grates
  line(180,255,225,255);
  line(275,255,320,255);
  line(202.5,230,202.5,280);
  line(297.5,230,297.5,280);
  
  //Doors
  fill(140);
  rect(215,360,70,100)
  line(250,360,250,460);

  //door knobs
  fill(100);
  ellipse(240,412,8,8);
  ellipse(260,412,8,8);
  point(240,412);
  point(260,412);
  
  //Grass
  fill(100);
  rect(0,470,600,470);
  noFill(225);
  //step
  rect(202,460,95,10);
  fill(34);
  //sidewalk
  fill(225);
  rect(202,470,95,600);
}
