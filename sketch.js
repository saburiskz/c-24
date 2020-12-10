
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	paperSprite=createSprite(30, 647,20,20 );
	
	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.5, isStatic:true});
	World.add(world, paperBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 boxPosition= 500
	 boxY=610;

	 boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	 boxLeftSprite.shapeColor=color(255,0,0)

	 boxLeftBody= Bodies.rectangle(boxPosition+20, boxY,20,100, {isStatic:true})
	 World.add(world,boxLeftBody)

	 boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	 boxBase.shapeColor=color(255,0,0)

	
	 boxLeftSprite=createSprite(boxPosition+200, boxY,20,100);
	 boxLeftSprite.shapeColor=color(255,0,0)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		paperSprite.x = paperSprite.x+40;
		translation={x:20,y:0}
		Matter.Body.translate(paperBody,translation)
	
	
	}
	if (keyCode === UP_ARROW) {
		
	Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:-85});
	
	  }	

}





