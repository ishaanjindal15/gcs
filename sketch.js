var car1,car2,car3,wall
var speed,weight
function setup() {
  createCanvas(1600,400);
 car1= createSprite(50, 200, 15, 15);
 car2= createSprite(50, 150, 15, 15);
 car3= createSprite(50, 100, 15, 15);
 wall= createSprite(1500, 200, 15, 300);
 speed=60;
}

function draw() {
  background(0);
  
  if(keydown="space"){
    car1.velocityX = speed;
    car2.velocityX = speed;
    car3.velocityX = speed;
  }
 if (wall.x-car1.x<(car1.width+wall.width)/2){
   car1.velocityX=0;
   car1.shapeColor="red"
 }
 if (wall.x-car2.x<(car2.width+wall.width)/2){
  car2.velocityX=0;
  car2.shapeColor="yellow"
}
if (wall.x-car3.x<(car3.width+wall.width)/2){
  car3.velocityX=0;
  car3.shapeColor="green"
}

 drawSprites();
}