
var seaImg,sea,shipImg,ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("ship1.png,ship2.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  //shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(600,300);
  background("blue");

  // Moving background
  sea=createSprite(10,200,600.10);
  sea.addImage(sea.png);
  sea.scale=0.3;
  sea.x=sea.width/2;
  sea.velocityx=-3;
  sea.visible=false

  
  ship = createSprite(70,180,20,20);
  ship.addAnimation("ship",shipImg,shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(seaImg);
  if(keydown("space")) {
  ship.veloityY = -10
  }

  ship.velocityY = ship.velocityY + 0.8

  if(sea.x < 0) {
    sea.x =sea.width/2;
  }

  ship.collide(sea);
  drawsprite()
}
