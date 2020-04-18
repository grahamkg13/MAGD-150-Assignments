function setup() {
  createCanvas(400, 400);
}
let x
let y
let xSpeed
let tvOn = false
let captionOn = false
let radius=20
let tvscreen=120
let a               // x coordinate of rectangle button
let b               // y coordinate of rectangle button
let c               // width of rectangle button
let e               // height of rectangle button
let buttonNoHover;
let buttonNoHoverRect;

function setup() {
  createCanvas(480, 480);
  ellipseMode(RADIUS);
  x=85;
  y=height/2.5;
  xspeed=6
  a=112
  b=333
  c=62
  e=33
  l=23
  m=44
  p=222
  buttonNoHover = color(33,224,133);
  buttonNoHoverRect = color(232,100,202);
}

function draw() {
  background(12,33,100);
  fill(0);                       // tv
  rect(40,70,400,300);
  fill (tvscreen);
  rect(60,90,360,240);
  
  textSize(20);                  // tv brand
  fill(255);
  text('VIZIO',215,355);

  fill(buttonNoHover);              // on/off button
  ellipse(350,350,radius,radius);
  fill(255);
  textSize(13);
  text('ON',340,348);
  text('OFF',338,360);
  fill(buttonNoHoverRect);             // Closed Caption Button
  rect(a,b,c,e);
  fill(255);
  textSize(13);
  text('Closed',118,348);
  text('Caption',118,360);
    
  
    d = dist(mouseX,mouseY,350,350);
  
   //conditional to change button color on mouseover NO PRESS
  if (d<radius){
    buttonNoHover= color(255,23,100);
    } else{
      buttonNoHover = color(33,224,133);
    }
    
   if  (tvOn) // push on/off to turn tv on
     {tvscreen = 200;         // and see bouncing ball 
     fill (tvscreen);
     rect(60,90,360,240)
     fill(45,23,100);  
     ellipse(x,y,20,20);
     fill(l,m,p);
     ellipse(x,y,10,10);
         (x += xspeed);}
  else if (d<radius)     // push on/off to turn tv off
     {tvscreen = 120;
     fill (tvscreen);
     rect(60,90,360,240);}
  
  if (captionOn)
   
     {tvscreen = 200;        
     fill (tvscreen);//screen displays Closed captioning is on 
     rect(60,90,360,240);
     fill(0);
     textSize(20);
           text ('Closed Captioning is on',140,200)}
  
    else if ((mouseX>112) && (mouseX<176) &&           
     (mouseY>333) && (mouseY<370))
     {tvscreen = 120;
     fill (tvscreen);    // Closed captioning is off
     rect(60,90,360,240);}
   
   if(x-80<=0||x+80>width)
     {xspeed *=-1}} 
   
   function mousePressed(){
     
     
    
    
     
     // round button conditional ON PRESS
     if (d<radius){
     tvOn = !tvOn;
     
    }

     if ((mouseX>112) && (mouseX<176) &&           
     (mouseY>333) && (mouseY<370)) //close caption button pressed
        
     captionOn = !captionOn;
    
}