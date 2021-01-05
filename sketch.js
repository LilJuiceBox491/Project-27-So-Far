
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObj, bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObj = new roof(width/2,75,width-350,30);
	bobObj1 = new bob(width/2,300,60)
	bobObj2 = new bob(width/2-60,300,60)
	bobObj3 = new bob(width/2+60,300,60)
	bobObj4 = new bob(width/2-120,300,60)
	bobObj5 = new bob(width/2+120,300,60)
	rope1 = new rope1(bobObj1.body,roofObj.body,60*2,0)
	rope2 = new rope1(bobObj2.body,roofObj.body,60*2,0)
	rope3 = new rope1(bobObj3.body,roofObj.body,60*2,0)
	rope4 = new rope1(bobObj4.body,roofObj.body,60*2,0)
	rope5 = new rope1(bobObj5.body,roofObj.body,60*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgray');
  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}



