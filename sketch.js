var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="Green";
  fixedRect.velocityY= 5;
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="Green";
  movingRect.velocityY= -5;
}

function draw() {
  background(0,0,0);  
  //console.log(fixedRect.x-movingRect.x);
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  if (movingRect.x-fixedRect.x < movingRect.width/2+ fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2+ fixedRect.width/2 
    && fixedRect.y-movingRect.y < movingRect.width/2+ fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.width/2+ fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if (movingRect.x-fixedRect.x < movingRect.width/2+ fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2+ fixedRect.width/2 ){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
    }
    if (movingRect.y-fixedRect.y < movingRect.width/2+ fixedRect.width/2 
      && fixedRect.y-movingRect.y < movingRect.width/2+ fixedRect.width/2 ){
        fixedRect.velocityY=fixedRect.velocityY*(-1);
        movingRect.velocityY=movingRect.velocityY*(-1);
      }
  drawSprites();
}