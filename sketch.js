const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,gorund2
var block1, block2, block3, block4, block5, block6, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var hex_image, hex

var chain


function preload(){
hex_image= loadImage("polygon.png")

}

function setup(){

createCanvas(800,600)

engine = Engine.create();
world = engine.world;

ground = new ground(400,580,1000,20)

block1 = new block(400,580,1000,20);
block2 = new block(640,250,220,20);
block3 = new block(300,425,30,30);
block4 = new block(330,425,30,30);
block5 = new block(360,425,30,30);
block6 = new block(390,425,30,30);
block7 = new block(420,425,30,30);
block8 = new block(270,395,30,30);
block9 = new block(300,395,30,30);
block10 = new block(330,395,30,30);
block11 = new block(360,395,30,30);

}

function draw(){

rectMode(CENTER);
background("black")

ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();





}