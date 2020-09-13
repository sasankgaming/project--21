var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,1600);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour=colour(80,80,80);
}

function draw() {
  background(0,0,0);  
  car.veloctyX=speed;

  if(hasCollided(bullet,wall)){
    bullet.veloctyX=0
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness );
    |

    if(damage>10){
      wall.shapeColour=colour(255,0,0);
    }
    if(damage<10){
      wall.shapeColour=colour(0,255,0);
    }


  }



  drawSprites();
}

function hasCollided( 1bullet, 1wall){
bulletRightEdge=1bullet.x +1bullet.width;
wallLeftEdge=1wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  turn false ;
}










