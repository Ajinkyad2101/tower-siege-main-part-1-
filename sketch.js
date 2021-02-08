const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,base1,base2;
var block1,block2,block3,block5;
var block6,block7,block8,block9;


function preload(){

}

function setup(){
    var canvas = createCanvas (800,400)
    engine=Engine.create()
    world=engine.world;

    //bodies are created here
    ground=new Ground(400,400,800,20)
    
    base1=new Ground(300,300,220,10)
    base2=new Ground(600,250,180,10)

    block1=new Block(300,200,40,50)
    block2=new Block(340,200,40,50)
    block3=new Block(380,200,40,50)
    block4=new Block(260,200,40,50)
    block5=new Block(220,200,40,50)
    block6=new Block(360,160,40,50)
    block7=new Block(320,160,40,50)
    block8=new Block(280,160,40,50)
    block9=new Block(240,160,40,50)
    block10=new Block(300,120,40,50)
    block11=new Block(340,120,40,50)
    block12=new Block(260,120,40,50)
    block13=new Block(280,80,40,50)
    block14=new Block(320,80,40,50)
    block15=new Block(300,40,40,50)

    block16=new Block(600,200,40,50)
    block17=new Block(640,200,40,50)
    block18=new Block(560,200,40,50)
    block19=new Block(620,160,40,50)
    block20= new Block(580,160,40,50)
    block21=new Block(600,120,40,50)

    striker=new Polygon(70,240,20)

    rope=new SlingShot(striker.body,{x:100,y:250})

}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display()
    base1.display()
    base2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    striker.display()


}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
    rope.fly()
}

function keyPressed(){
rope.attatch(striker.body)
Matter.Body.setPosition(striker.body,{x:100,y:250})
}