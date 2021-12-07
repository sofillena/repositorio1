var caixa 
function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if(keyDown("w")){
    caixa.velocityY= -5;
  
  }
  if(keyDown("s")){
    caixa.velocityY= 5; 
  }
  if(keyDown("a")){
    caixa.velocityX = -5;
  }
  if(keyDown("d")){
    caixa.velocityX= 5;
  }
drawSprites();
}




