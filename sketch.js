
var bgImg;
var cat;
var mouse;


function preload() {
    
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 =  loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(900,600);
    cat.addAnimation("cat1",catImg1);
    cat.scale=0.2

    mouse=createSprite(200,600);
    mouse.addAnimation("mouse1",mouseImg1);
mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x < (cat.width-mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("cat3",catImg4)
cat.x=300;
cat.changeAnimation("cat3")
mouse.addAnimation("mouse3",mouseImg4)
mouse.changeAnimation("mouse3")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning");
cat.velocityX=-5;
    }






}
