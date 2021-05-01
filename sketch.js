const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	bin = new dustbin();
    Ball1 = new paper(100, 650, 70);    
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER)
  Ball1.display();
  bin.display();
  rect(ground.position.x, ground.position.y, width, 10)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	  Matter.Body.applyForce(Ball1.body, Ball1.body.position, {x: 1000, y: -1150})
	   
	 }
   }
