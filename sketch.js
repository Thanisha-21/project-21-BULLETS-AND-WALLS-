//creating bullet and wall variable.
var bullet;
var wall;

//creating speed,weight and thickness variable.
var speed;
var weight;
var thickness;

function setup(){
//creating canvas.
  createCanvas(1600,400);
//giving random value for speed.
  speed = random(223,321);
//giving random value for weight.
  weight = random(30,52);
//giving random value for thickness.
  thickness = random(22,83);

//creating sprite for bullet.
  bullet = createSprite(50,200,50,5);
//giving velocity for bullet.
  bullet.velocityX = speed;
//giving shapeColor for the bullet.
 bullet.shapeColor = ("white");

//creating sprite for wall.
  wall = createSprite(1200,200,thickness,height/2);
//giving shapeColor to the wall.
  wall.shapeColor = (80,80,80);
}
function draw(){
  background("black");
  
if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  
  if(damage < 10){
    wall.shapeColor = color(0,225,0);
  }
}
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
    return false;
}