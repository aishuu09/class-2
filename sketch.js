var trex, trexAnimation;
var ground, groundimage;
function preload() {
  trexAnimation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage = loadImage("ground2.png");
}
// any sprite one time in program
function setup() {
  createCanvas(600, 200);

  //trex
  trex = createSprite(30, 175, 50, 50);

  trex.addAnimation("arya", trexAnimation);
  trex.scale = 0.4;
  ground = createSprite(300, 195, 600, 10);
  ground.addImage("floor", groundimage);
}

// to display any objects and fuctions contiounusly in program
function draw() {
  background("black");
  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY);

  if (keyDown("space")) {
    trex.velocityY = -6;
  } else if (keyDown("up")) {
    trex.velocityY = -6;
  }
trex.velocityY=trex.velocityY+0.5
ground.velocityX=-4
trex.collide(ground)


}
