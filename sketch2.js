let ingelosirla;
let bg

function preload() {
  bg = loadImage("./assets/sfondo.jpg")
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  ingelosirla = createVideo(["./assets/video.mp4"]);
  ingelosirla.hide();


  
}
 


function draw() {
  textFont("Rubik Mono One");
  background(bg)
  image(ingelosirla, mouseX-ingelosirla.width/2, mouseY-ingelosirla.height/2);
  textAlign(CENTER, CENTER);
  fill("black");
  textSize(40);
  text("VA BENE, FALLO! (clicca)", width/2, height/4);
}

function mousePressed() {
  ingelosirla.loop()
}



