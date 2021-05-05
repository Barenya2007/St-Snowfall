const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload(){
  bg =loadImage("snow1.jpg");
  
  }


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(200,50,50,50);
  
}

function draw() {
  background(bg);  
  
  snow1.display();
}