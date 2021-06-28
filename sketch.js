var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0

var rGroup
var gGroup
var pGroup
var bGroup
var arGroup
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  rGroup = new Group()
  gGroup = new Group()
  bGroup = new Group()
  pGroup = new Group()
  arGroup = new Group()
}

function draw() {
 background(0);
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,2));
  
  if (World.frameCount % 200 == 0) {
    
      redBalloon();
   
  }
  
  if (World.frameCount % 150 == 0) {
    
      greenBalloon();
  }

  if (World.frameCount%100 ===0){
    blueBalloon()
  }
  if (World.frameCount%75===0){
    pinkBalloon()
  }
if (arGroup.isTouching(rGroup)){
  arGroup.destroyEach()
  rGroup.destroyEach()
  score = score+1
}
if (arGroup.isTouching(gGroup)){
  arGroup.destroyEach()
  gGroup.destroyEach()
  score = score+2
}
if (arGroup.isTouching(pGroup)){
  arGroup.destroyEach()
  pGroup.destroyEach()
  score = score+3
}
if (arGroup.isTouching(bGroup)){
  arGroup.destroyEach()
  bGroup.destroyEach()
  score = score+4
}
  drawSprites();
  text("SCORE: "+score,200,350)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arGroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  rGroup.add(red)
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random (20,370)),10,10)
 blue.addImage(blue_balloonImage)
 blue.velocityX = 2
    blue.lifetime = 200
    blue.scale = 0.1
    bGroup.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random (20,370)),10,10)
  green.addImage(green_balloonImage)
 green.velocityX = 4
    green.lifetime = 100
    green.scale = 0.1
    gGroup.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random (20,370)),10,10)
  pink.addImage(pink_balloonImage)
  pink.velocityX = 4
  pink.lifetime = 100
 // pink.scale = 0.1
 pGroup.add(pink)
}
