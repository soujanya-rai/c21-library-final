var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
  box1 = createSprite(400, 200, 70, 60);
  box2 = createSprite(700, 200, 70, 60);
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  box1.shapeColor = "yellow";
  box2.shapeColor = "yellow";

  if(checkRectCollision(movingRect, box1)) {
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }

  if(checkRectCollision(fixedRect, movingRect)) {
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }

  drawSprites();
  
}


