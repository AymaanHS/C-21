var fixedRec, movingRec;
var obstacle1, obstacle2;

var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(100, 200, 50, 50);
  movingRec = createSprite(400, 200, 50, 50);
  obstacle1 = createSprite(300, 100, 50, 50);
  obstacle2 = createSprite(500, 100, 50, 50);

  rect1 = createSprite(300,300,50,50);
  rect2 = createSprite(500,300,50,50);


fixedRec.shapeColor = "green";
movingRec.shapeColor = "green";
obstacle1.shapeColor = "purple";
obstacle2.shapeColor = "purple";

  fixedRec.debug = true;
  movingRec.debug = true;
  obstacle1.debug = true;
  obstacle2.debug = true;

  obstacle1.velocityX = 4;
  obstacle2.velocityX = -4;



}

function draw() {
  background(0);  
movingRec.x = mouseX;
movingRec.y = mouseY;

if (collision(rect2,movingRec))
{
  rect2.shapeColor = "orange";
  movingRec.shapeColor = "orange";
}
else
{
  rect2.shapeColor = "green";
  movingRec.shapeColor = "green";
 }



if((obstacle1.x-obstacle2.x<=obstacle1.width/2+obstacle2.width/2&&obstacle2.x-obstacle1.x<=obstacle1.width/2+obstacle2.width/2))
{
 obstacle1.velocityX = -4;
 obstacle2.velocityX = 4;
}

  drawSprites();
}


