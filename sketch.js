//https://p5js.org/reference/#/p5/createCanvas

//https://molleindustria.github.io/p5.play/docs/classes/Sprite.html

//declaring variables
var trex, trexAnimation;
var ground, groundImage;
var invisibleGround;
var clouds, cloudsImage;
var cactus,
  cactusImage1,
  cactusImage2,
  cactusImage3,
  cactusImage4,
  cactusImage5,
  cactusImage6;

var score = 0;

var play = 0;
var end = 1;
var gamestate = play;
var cactusGroup, cloudsGroup;
//its used to load the assets inside the program

function preload() {
  trexAnimation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudsImage = loadImage("cloud.png");

  cactusImage2 = loadImage("obstacle2.png");
  cactusImage3 = loadImage("obstacle3.png");
  cactusImage4 = loadImage("obstacle4.png");
  cactusImage5 = loadImage("obstacle5.png");
  cactusImage6 = loadImage("obstacle6.png");
  cactusImage1 = loadImage("obstacle1.png");
}

//its used to create Object
function setup() {
  createCanvas(600, 200);

  ground = createSprite(300, 180, 600, 10);
  ground.addImage("floor", groundImage);

  invisibleGround = createSprite(300, 185, 600, 10);
  invisibleGround.visible = false;

  trex = createSprite(30, 160, 40, 40);
  trex.addAnimation("Tania", trexAnimation);
  trex.scale = 0.3;
  //creating grups
  cactuGroup = new Group();
  cloudsGroup = new Group();
}

//its used to display objects and their functions
function draw() {
  background("black");

  // displaying x and y coordinates using mouse
  text(mouseX + "," + mouseY, mouseX, mouseY);

  text("Score:   " + score, 500, 40);

  //dividing the code into gamestate
  if (gamestate === play) {
    ground.velocityX = -4;
    score = score + Math.round(frameCount / 60);
    createclouds();
    createCactus();

    //infinite.ground
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    if (keyDown("space") && trex.y >= 166) {
      trex.velocityY = -8;
    } else if (keyDown("up") && trex.y >= 166) {
      trex.velocityY = -8;
    }

    //gravity

    trex.velocityY = trex.velocityY + 0.5;
    if (cactusGroup.isTouching(trex)) {
      gamestate = end;
    }
  } else if (gamestate === end) {
    trex.velocityY = 0;
    ground.velocityX = 0;
  }

  trex.collide(invisibleGround);

  //console.log(trex.y)
  //console.log(frameCount)

  drawSprites();
}

function createclouds() {
  if (frameCount % 50 === 0) {
    clouds = createSprite(550, 50, 50, 10);
    clouds.velocityX = -4;
    clouds.addImage("cloud", cloudsImage);
    clouds.scale = 0.5;
    clouds.y = Math.round(random(50, 120));
    //  console.log("clouds created")

    trex.depth = clouds.depth;
    trex.depth += 1;

    console.log("trex depth", trex.depth);
    console.log("clouds depth", clouds.depth);

    //liftim= distance/speed
    //here distance= clous initial x posistion , speed= velocity
    clouds.life = 138;

    //adding sprites to your clouds group
    cloudsGroup.add(clouds);
  }
}
function createCactus() {
  if (frameCount % 60 == 0) {
    cactus = createSprite(590, 170, 10, 80);
    cactus.velocityX = -6;
    cactus.lifetime = 98;
    cactus.scale = 0.3;
    cactusGroup.add(cactus);
    var number = Math.round(random(1, 6));
    switch (number) {
      case 1:
        cactus.addImage(cactusImage1);
        break;
      case 2:
        cactus.addImage(cactusImage2);
        break;
      case 3:
        cactus.addImage(cactusImage3);
        break;
      case 4:
        cactus.addImage(cactusImage4);
        break;
      case 5:
        cactus.addImage(cactusImage5);
        break;
      case 6:
        cactus.addImage(cactusImage6);
        break;
      default:
        break;
    }
  }
}

//console.log(Math.random(10,20))
