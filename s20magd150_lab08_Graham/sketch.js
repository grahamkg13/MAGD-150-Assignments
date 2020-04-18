var maxImages;
var imageIndex;
var stills = [];
var lines = [];
var gab;
var count, fontSize, lineSpacing, margin;
let img;
let imgr;
var pdf;

function preload() {

 
//pictures are loaded as well as fonts and text imports. 
for (let i = 0; i < 4; i++) {	
 stills[i] = loadImage( "still" + i + ".png" );
lines = loadStrings("hook.txt");
  gab = loadFont("Gabriola.ttf"); 
	img = loadImage("Soulleft.png");
	imgr = loadImage("Soulright.png");
	
}


}

function setup() {
	pdf = createPDF();
	pdf.beginRecord();
	//Title of the "movie's" font is Inkfree.
  createCanvas(1920, 1080, P2D);
	background(32);
	noStroke();
	inkFree = loadFont("Inkfree.ttf");

  //Loaded a new image for the poster
	
    maxImages = 4;
    imageIndex = 0;
	print(imageIndex);
	fill(234,55,225);
    count = lines.length;
    fontSize = 50
    textFont(gab);
    textSize(fontSize);
	lineSpacing = 2;
	margin = 900;
  	textAlign(CENTER,BOTTOM);
	
   
	
}

function draw() {
	 
	 //Txt Document import which displays at the bottom of the screen.
	
	image(stills[imageIndex], 0, 0, 1920, 1080);
	
    for (let i = 0; i < count; ++i) {
    text(lines[i], margin, margin + (fontSize + lineSpacing) * i);
		
	//Text for Title is animated here. It zooms horizontally.
	push();
  	translate(width / 2.0, height / 4.0);
  	shearX(frameCount / 90.0);
  	fill(235, 0, 0, 120);
	textAlign(CENTER,TOP);
	textFont(inkFree);
	textSize(100);
  	text("Soul Keeper", 0, 0);
  	pop();
	

	
	
		
  } //The margins for the import description text.
  print (margin+ "," + "," + fontSize + "," + lineSpacing)
	
	push();
	image(img, 0, 0);
	tint(557,44,667);
	image(imgr,0,0);
	pop();
	
}
    function mousePressed(){  
        //Pictures changed when clicking the mouse. There are a total of 4 pictures.
		//The four pictures are 'scenes' from the movie.
imageIndex = int(random(stills.length));
	 
	img.resize(1000, 800); //left souls resize
	
    }

function keyPressed(){

	pdf.save();
}

