
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingshotObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1300,70,30);
	mango3=new mango(900,120,30);
	mango4=new mango(700,90,30);
	mango5=new mango(600,60,30);
    stoneobj=new stone(208,360,40,40)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshotObject=new Slingshot(stone.body,{x:200,y:50});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stoneobj.display();
  groundObject.display();
  slingshotObject.display()
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouthReleased(){
slingshot.fly();
}
