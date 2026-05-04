let ultimoX;
let ultimoY;

function setup() {
createCanvas(windowWidth, windowHeight);
background(242,236,222);
rectMode(CENTER);

ultimoX=mouseX;
ultimoY=mouseY;
}

function draw() {
}

function mouseMoved() {
// para que no se peguen las formas
if(dist(mouseX,mouseY,ultimoX,ultimoY)>70) {

let figura=int(random(4));

// lineas solas
if(figura==0) {

stroke(25);
strokeWeight(random(1,4));

line(
  mouseX,
  mouseY,
  mouseX+random(-180,180),
  mouseY+random(-180,180)
);
}

// circulos
if(figura==1) {
noStroke();

let c=int(random(4));

  if(c==0){
  fill(180,45,45); // rojo 
  }
  if(c==1){
  fill(50,80,150); // azul 
  }
  if(c==2){
  fill(210,170,60); // amarillo 
  }
  if(c==3){
  fill(230); // blanco gastadito
  }

circle(
  mouseX,
  mouseY,
  random(30,90)
);
}

// triangulos
if(figura==2) {
stroke(30);
strokeWeight(2);

let c=int(random(4));

  if(c==0){
  fill(180,45,45,180);
  }
  if(c==1){
  fill(50,80,150,180);
  }
  if(c==2){
  fill(210,170,60,180);
  }
  if(c==3){
  fill(200,190,175,180);
  }

triangle(
  mouseX,
  mouseY,

  mouseX+random(-120,120),
  mouseY+random(-120,120),

  mouseX+random(-120,120),
  mouseY+random(-120,120)
);
}

// rectangulos
if(figura==3) {
stroke(25);

let c=int(random(5));

  if(c==0){
  fill(245);
  }
  if(c==1){
  fill(180,45,45);
  }
  if(c==2){
  fill(50,80,150);
  }
  if(c==3){
  fill(210,170,60);
  }
  if(c==4){
  fill(170);
  }

rect(
  mouseX,
  mouseY,
  random(35,100),
  random(35,100)
);
}

ultimoX=mouseX;
ultimoY=mouseY;
}

}
