let playing = false;
let twirl;
let button;
let merodiSing;

function preload() {
  soundFormats('wav');
  merodiSing = loadSound('la4.wav'); //Variable for Merodi's sound file.
}

function setup() {
  // Loaded Merodi's spin video. NOTE: There is a delay with it.
  twirl = createVideo(['Merodi Spin 2.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); 
	reverb = new p5.Reverb();
	
	//connecting the audio to reverb.
	merodiSing.disconnect();
	
	//2 second reverb time and 2% decay rate.
	reverb.process(merodiSing,2,2); 
	
}

// Plays and pauses video and the music to go with.
function toggleVid() {
  if (playing) {
    twirl.pause();
	 merodiSing.stop();
    button.html('play');

  } else {			//The video loops while the audio's volume tones down to 0.5.
    twirl.loop();
	merodiSing.play();
	merodiSing.setVolume(0.5);
    button.html('pause');

	

	
	
  }
  playing = !playing; 
}
