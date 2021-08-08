var ship,ship_running,edges;
var seaImage
var sea 
function preload(){
 seaImage = loadImage("sea.png")
 ship_running = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addImage("running"ship_running);



}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  }