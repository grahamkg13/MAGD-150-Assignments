function setup() {
  createCanvas(500,580);
}

function draw() {
 background(0);
  

  
  //Planet 1
  stroke(255,2,0,0.5);
  strokeWeight(8);
  colorMode(RGB,140,112,655,4);
  fill(88,0,0);
  ellipse(100,122,110,110);
  
   //planet 1_1
  fill(123,0,0);
  noStroke();
  colorMode(RGB,170,120,655,4);
  ellipse(105,133,85,85);
  
    //rings
  stroke(255,0,3);
  strokeWeight(5);
  noFill();
  bezier(46,122,-40,150,240,150,154,124);

  

  //planet 2
  stroke(0,100,0);
  strokeWeight(2);
  colorMode(RGB,170,115,23,3);
  fill(33,44,0);
  ellipse(375,445,200,200);
  
  //planet 2_1
  fill(0,123,0);
  noStroke();
  colorMode(RGB,170,115,23,4);
  ellipse(365,465,160,160);
  
  //Flag
  stroke(0);
  line(365,500,365,460);
  fill(344,0,544);
  quad(365,460,380,465,375,470,365,468);

  
  
  //Planet 3
  stroke(90,0,10);
  strokeWeight(5);
  colorMode(RGB,110,40,2,1);
  fill(100,0,30);
  ellipse(400,100,140,140);
  
  //Planet3_1
  fill(100,20,30);
  noStroke();
  ellipse(393,110,110,110);
  stroke(2);
  strokeWeight(4);
  

  
  //blue big planet
  stroke(22,0,3,0.5);
  //create color for c
  c=color(22,0,3);
  fill(c);
  ellipse(100,320,100,100);
  
  
  //Used HSB to change blue moon to gray moon
  colorMode(HSB,10);
  c=color(22,0,3);
  fill(c);
  ellipse(200,400,85,85);
  
  colorMode(RGB);
  
  //little little moon near top of red planet
  stroke(20,43,34,0.4);
  strokeWeight(8);
  fill(255,85,34);
  ellipse(100,30,25,25);
  
  //small blue planet right of red planet
  stroke(8,7,44,0.5);
  strokeWeight(9);
  fill(23,85,34);
  ellipse(200,170,25,20);
  
  //blue moon next to pink planet
  stroke(0,65,55,0.5);
  strokeWeight(7);
  fill(25,0,34);
  ellipse(320,100,55,55);
  
  //green and blue moon at the bottom
  stroke(24,22,33,0.6);
  strokeWeight(9);
  fill(0,85,0);
  ellipse(80,490,55,55);

  //yellow moon
  stroke(44,22,0,0.5);
  strokeWeight(8);
  fill(255,85,0);
  ellipse(420,290,75,75);
  
  //yellow ring
  stroke(123,34,0);
  strokeWeight(5);
  noFill();
  bezier(385,280,340,240,510,320,450,310);
  
  


   // triangular spaceship
  fill(12,99,222);
  stroke(4);
  strokeWeight(2);
  triangle(250,300,220,240,250,260);
  fill(33,33,33);
  stroke(255,255,255,0.5);
  strokeWeight(5);
  
  //lights on triangular space ship
  ellipse(250,262,10,10);
  ellipse(220,240,10,10);
  ellipse(250,300,10,10);

  //UFO
  stroke(1);
  strokeWeight(1);
  fill(100,100,100,0.5);
  ellipse(330,210,100,20);
  fill(100);
  stroke(255,255,255,0.5);
  strokeWeight(4);
  arc(330, 200, 50, 50, -PI, 0, CHORD);
  
  //small Hexadecimal planet near red planet
  stroke(88,5,33,0.5);
  strokeWeight(4);
  fill('#45CCBC');
  ellipse(20,200,20,20);
  }