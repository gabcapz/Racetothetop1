var ken, kenLeftImage, kenRightImage, bg, ground, snake;
var score = 0;

function preload(){
kenImage = loadImage("ken.png");
kenRightImage = loadImage("walkingRight3.png");
kenLeftImage = loadImage("walkingLeft1.png");
bg = loadImage("Faraway-tree.jpg");
snakeImage = loadImage("snake.png");
gemImage = loadImage("gem.png");
}

function setup() {
  createCanvas(400,600);

  ken = createSprite(200, 500, 5, 45);
  ken.addImage("walking", kenImage);
  ken.scale = 0.45;

  snake = createSprite(0, 500, 50, 50);
  snake.addImage("snake", snakeImage);
  snake.scale = 0.15;

  gem = createSprite(300, 400, 10, 10);
  gem.addImage("gem", gemImage);
  gem.scale = 0.15;

  ground = createSprite(200, 545, 400, 5);
  ground.visible = false;
}

function draw() {
  background(bg);  

  if(keyDown(RIGHT_ARROW)){
    ken.x += 2;
    ken.addImage("walking", kenRightImage);
    ken.scale = 0.9;
  }

  if(keyDown(LEFT_ARROW)){
    ken.x -= 2;
    ken.addImage("walking", kenLeftImage);
    ken.scale = 0.9;
  }

  if(keyDown("space")){
    ken.velocityY -= 5;
  }

  if(ken.isTouching(gem)){
    score += 1;
    gem.destroy();
  }

  ken.velocityY += 0.8;     

  ken.collide(ground);

  if(snake.x < 140){
    snake.velocityX = 5;
  } else{
  snake.velocityX = 0;
  }

  console.log(snake.x)

  drawSprites();
  stroke("white");
  fill("blue");
  textSize(20);
  text("Score : " + score, 300, 150);
}