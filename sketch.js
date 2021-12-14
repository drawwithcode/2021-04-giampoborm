let emanuele = [];
let a=0;
let ema;
let oo;
const urlString = window.location.href;
let url = new URL(urlString);
let bg
let iterator = 0;

function preload() {
  /*for(let i=0; i < 2; i++) {
    emanuele[i] = loadImage("./assets/emanuele"+i+".png");
  }*/
  bg = loadImage("./assets/sfondo.jpg")

  
}



function cambio() {
  ema.removeClass("immagini");
  ema.addClass("immagini1")

  //for(x=0; x < windowWidth; x+=10) {  tried to make this button into a nested cycle but this literally broke the enitre browser somehow. No console errors though.
    //for(y=0; y < windowHeight; y+=10) {
      oo = createButton("vuoi farla ingelosirla?")
      //oo.addClass("bottone");
      let x = random(windowWidth);
      let y = random(windowHeight);
      oo.position(x,y);
      /*oo.forEach((oo, i) => {
        let x = noise((iterator + (40 * i)) / 400) * windowWidth;
        let y = noise((iterator - (40 * i)) / 400) * windowHeight;
        oo.position(x, y);})*/
    //}
  //}
  oo.mouseClicked(function () {
    window.open(url + "videopage.html", "_self");
  });

  //a=1; somehow this function doesn't affect the source. the only working way i found was through the url inside the class
  //ema = createImg("./assets/emanuele1.png"); neither this one works fine, it just create another picture
 }

function setup() {
  //createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
    /*ema = createElement("img")
  ema.src(".assets/emanuele0.png")
  ema.mouseOver(cambio);*/ // failed attempt on using createelement to use an image
  noCanvas();
  
 

  
}
 


function draw() {
  console.log(a);
  //image(emanuele[a], width/2, height/2, emanuele[a].width, emanuele[a].height); //easy p5 image way to do that
  noLoop();
  ema = createImg("./assets/emanuele"+a+".png", )
  ema.addClass("immagini");
  ema.mouseOver(cambio)
}




