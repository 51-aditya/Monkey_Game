var banana,bananaimg,bananagroup;
var monkey,monkeyimg;
var obsaclegroup,obstacleimg,obstacle;
var score=0;
var Background,backgroundimg;
var ground;


function preload(){
   bananaimg = loadImage("banana.png");
   monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
   backgroundimg = loadImage("jungle.jpg");
   obstacleimg = loadImage("stone.png"); 
}  


function setup() {
  createCanvas(400,400);
  
  Background=createSprite(200,200,10,10);
  Background.addImage("backgroundimg",backgroundimg);
  Background.velocityX = -2;
  
  monkey = createSprite(50,330,10,10);
  monkey.addAnimation("monkeyimg",monkeyimg);
  monkey.scale=0.10;

  ground = createSprite(200,370,400,1);
  ground.visible = false;  
  
  bananagroup = new Group();
  obstaclegroup = new Group();
}

function draw() {
  background(220);
  
  if (Background.x < 0){
  Background.x = Background.width/2;
  }
 
  monkey.collide(ground);
  
  if (frameCount % 80 == 0) { 
    banana = createSprite(400,300,10,10);
    banana.addImage("bananaimg",bananaimg);
    banana.scale = 0.05;
    banana.y = Math.round(random(250,350));
    banana.velocityX = -5;
    bananagroup.add(banana);  
  }
  
  if (monkey.isTouching(bananagroup)){
     score = score + 2;
     bananagroup.destroyEach();
  }
  
   if(keyDown("space") && monkey.y >= 320) {
      monkey.velocityY = -14;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8;

  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
    case 50: monkey.scale = 0.20;
      break;
    case 60: monkey.scale = 0.22;
      break;
    default:break;
  }     
 
  if (frameCount % 120 == 0) { 
    obstacle = createSprite(400,355,10,10);
    obstacle.addImage("obstacleimg",obstacleimg);
    obstacle.scale = 0.12;
    obstacle.velocityX = -8;
    obstaclegroup.add(obstacle);  
}
  
  if (monkey.isTouching(obstaclegroup)){
     score = score - 2;
     obstaclegroup.destroyEach();
  }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,50,50);
}