
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score,obstaclesGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  groundImage = loadImage("sprite_2.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(40,160,20,20);  
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  
  //creating sprite for the banana
  banana = createSprite(300,100);
  
  //adding banana Image
  banana.addImage("banana",bananaImage);
  
  // adding size to the banana
  banana.scale=0.2;
  
  //creating sprite for the obstacle
  obstacle = createSprite(300,200);
  
  //adding obstacle an image
  obstacle.addImage("obstacle",obstacleImage);
  
  // adding size to the obstacle
  obstacle.scale=0.2;
}


function draw() {
  //creating a canvas for the Game
  createCanvas(600,200);
  
  //addung a backgroumd Image
  background("red");
  
  //calling functions
  spawnObstacles();
  spawnFood();
  
  //drawing the sprites
  drawSprites();
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -(6+score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle);
              break;
      case 2: obstacle.addImage(obstacle);
              break;
      case 3: obstacle.addImage(obstacle);
              break;
      case 4: obstacle.addImage(obstacle);
              break;
      case 5: obstacle.addImage(obstacle);
              break;
      case 6: obstacle.addImage(obstacle);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
function spawnFood(){
  if(frameCount % 60 === 0){
   var bananas = createSprite(400,165,10,40);
   banana.velocityX = -(6+score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: banana.addImage(bananaImage);
              break;
      case 2: banana.addImage(bananaImage);
              break;
      case 3: banana.addImage(bananaImage);
              break;
      case 4: banana.addImage(bananaImage);
              break;
      case 5: banana.addImage(bananaImage);
              break;
      case 6: banana.addImage(bananaImage);
              break;
      default: break;
    }
  }
}