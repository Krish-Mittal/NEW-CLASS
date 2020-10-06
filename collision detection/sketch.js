const eng=Matter.Engine;
const wor=Matter.World ;
const bod=Matter.Bodies;

var engine , world , ground , box1,box2;

function setup() {
  createCanvas(400,400);

  engine=eng.create();
  world=engine.world;
  
  var static=
  {
   isStatic:true
  }
  ground=bod.rectangle(400,350,800,50,static);
  wor.add(world,ground);
  
  box1=new box(200,300,50,50);
  box2=new box(240,100,50,100);

}
function draw() {
  background("yellow");
  eng.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 50);
  
  box1.display(); 
  box2.display(); 
  drawSprites();
}
