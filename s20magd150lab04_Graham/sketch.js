let size = 20
let shade = 0
let cut = false;
let pepperoni=false;
let sausage=false;
let x = 0
let circleX;
let circleY;
let lineX;
let lineY;

  
function setup() {
  createCanvas(400, 400);
  noStroke();
  circleX=0;
  rectX=-10;
  circleY=height/1.2;
  rectY=height/1.2-2;
}

function draw() {
  background(220); 
  fill(175);   
  ellipse(circleX, circleY,30,30); //"pizza cutter"
  fill(0);
  rect(rectX-35,rectY,30,5);
  circleX +=2;
  rectX +=2;
  fill(260,240,200);
  ellipse(200,200,250,250);        //pizza crust  
  fill(250,240,180);               //pizza cheese
  ellipse(200,200,225,225);
  fill(shade);
  textSize(size);
  text('Pizza Night',140,30);
  textSize(14);
  text('Choose your topping;',10,50);
  text('P=Pepperoni,  S=Sausage',30,70);
  


    if (sausage){
    fill(150,110,20);
    ellipse (190,260,15,10);
    ellipse (280,218,13,10);
    ellipse(220,210,20,10);
    ellipse(122,200,16,20);
    ellipse(230,130,30,20);
    ellipse(130,130,10,20);
    ellipse(210,300,20,20);
    ellipse(130,270,20,20);
    ellipse(270,280,20,20);
    ellipse(170,180,20,20);
    ellipse(300,180,20,20);
}  

 for (let x=1;x<=12;x++){
   fill(100,130,2);
   ellipse((width/2+(40*cos(x*PI/6))), (height/2+(40*sin(x*PI/6))), 10,10);          // green olives
}
                                       
 if(pepperoni){ 
  
    fill(150,50,20);                  //pepperoni pizza            
    ellipse(220,230,40,40);
    ellipse(270,200,40,40);
    ellipse(160,130,40,40);
    ellipse(240,130,40,40);
    ellipse(130,250,40,40);
    ellipse(260,270,40,40);
    ellipse(170,200,40,40);
    ellipse(110,200,40,40);
    ellipse(190,290,40,40);
    ellipse(210,170,40,40)
 }

      if (cut){                 // cut the pizza          
      stroke(40);          
      line(200,77,200,323);
      line(76,200,322,205);
      line(113,113,287,287);
      line(292,118,106,284);
      fill(0);
      textSize(12);  
      text('Come and Get It',50,375);
      }                         // pizza is baked, cut and ready to eat   
           
    else{
      fill(0);
     textSize(12);
     text('Pizza is not done yet',50,375);}  // pizza is still baking
      }


   function mousePressed(){                     // cut the pizza
     cut = !cut;
     if (size === 20){ 
       size = 30;
       }
   }

   function keyPressed (){
       if((key == 'p') || (key == 'P')) {
     pepperoni = !pepperoni;
       }
     
    if ((key == 's') ||(key == 'S')){
     sausage = !sausage;
    
    } 
    
     if (keyCode === LEFT_ARROW){
     shade = 180;
   
    }
     
   }



 