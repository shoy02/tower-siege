const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

ground1 = new Ground(400,790,10,400);
ground2 = new Ground();
ground3 = new Ground();

block1 = new Box();
block2 = new Box();
block3 = new Box();
block4 = new Box();
block5 = new Box();
block6 = new Box();

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingshot = new SlingShot( this.polygon, {x:100,y:200});

}

function draw() {
  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  ground1.display();
  ground2.display();
  ground3.display();

  background(255,255,255);  
  drawSprites();
}