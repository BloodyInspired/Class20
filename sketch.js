var movingrect, positionrect; 
function setup() { 
  createCanvas(800,800); 
  movingrect = createSprite(400, 200, 50, 50); 
  movingrect.shapeColor="blue"; 
  positionrect = createSprite(200, 200, 60 ,80); 
  positionrect.shapeColor="blue"; 
} 
function draw() { 
  background(255,255,255); 
  movingrect.x= World.mouseX; 
  movingrect.y= World.mouseY; 
  console.log(movingrect.x-positionrect.x) 
  if(movingrect.x-positionrect.x<movingrect.width/2+positionrect.width/2 &&
  positionrect.x-movingrect.x<movingrect.width/2+positionrect.width/2 &&
  movingrect.y-positionrect.y<movingrect.height/2+positionrect.height/2 &&
  positionrect.y-movingrect.y<movingrect.height/2+positionrect.height/2 ){
  positionrect.shapeColor="green"; 
  movingrect.shapeColor="green"; 
} 
  else{
  movingrect.shapeColor="blue"; 
  positionrect.shapeColor="blue"; 
} 
  drawSprites(); 
}