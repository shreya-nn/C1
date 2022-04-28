var ball; 

function setup() {
  createCanvas(400,400);
  ball = createSprite(150, 90, 20, 20);
  ball.shapeColor = "green"
}

function draw() 
{
  background(30);
  
  if(keyIsDown(RIGHT_ARROW)) {
    ball.position.x = ball.position.x + 5
  }

  if(keyIsDown(LEFT_ARROW)) {
    ball.position.x = ball.position.x - 5;
  }

  if(keyIsDown(UP_ARROW)) {
    ball.position.y = ball.position.y - 5;
  }
 
  if(keyIsDown(DOWN_ARROW)) {
    ball.position.y = ball.position.y + 5;
  }
  


  drawSprites();

}




