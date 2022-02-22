const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var player, walkAn, jumpimg, idleimg;
var invisibleground;
var lockyblock1, lockyblock2,lockyblock3,lockyblock4, lockyblock5, luckyblockimg;
var block1, block2, blockimg;
var pipe, pipeimg;

var bg_img



function preload(){
  bg_img = loadImage('background.png');
  luckyblockimg = loadImage('luckyblock.png')
  blockimg = loadImage('block.png')
  pipeimg = loadImage('cano.png')
  jumpimg = loadImage('mariojumping.png')
  idleimg = loadImage('marioidle.png')

  //walkAn = loadAnimation("mariowalking.png","mariowalking3.png")
}




function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;
  
  player = createSprite(560, 360, 40, 40)

  //player.addAnimation("run1",walkAn);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  //image(bg_img,0,0,width,height);
  Engine.update(engine);
   

  drawSprites();
}

