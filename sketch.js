const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    b1 = new Balls(505,450,10);
    b2 = new Balls(510,450,10);
    b3 = new Balls(515,450,10);
    b4 = new Balls(520,450,10);
    b5 = new Balls(525,450,10);
    b6 = new Balls(515,445,10);
    b7 = new Balls(520,445,10);
    b8 = new Balls(525,445,10);
    b9 = new Balls(530,445,10);
    b10 = new Balls(535,445,10);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();

    hammer.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
}