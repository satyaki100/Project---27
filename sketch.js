
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(200 , 500 , 50)
bobObject2 = new Bob(250 , 500 , 50)
bobObject3 = new Bob(300 , 500 , 50)
bobObject4 = new Bob(350 , 500 , 50)
bobObject5 = new Bob(400 , 500 , 50)
roof1 = new Roof(300 , 200 , 300 , 20)
rope1 = new Rope(bobObject1.body , roof1.body , -100 , 0)
rope2 = new Rope(bobObject2.body , roof1.body , -100 , 0)
rope3 = new Rope(bobObject3.body , roof1.body , -100 , 0)
rope4 = new Rope(bobObject4.body , roof1.body , -100 , 0)
rope5 = new Rope(bobObject5.body , roof1.body , -100 , 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 roof1.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()

}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-50,y:-45});
	
		  }
	}



