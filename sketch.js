const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world,ground;
var bgImg
var tower, towerImg;
var cannon
var angle;
var cannonballs=[]
//var boat
var boats=[]

function preload() {
 bgImg=loadImage("assets/background.gif")
 towerImg=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;
  cannon=new Cannon(180,110,130,100,angle);
  
  options={
    isStatic:true
  }
  tower=Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 
 
}

function draw() {

  image(bgImg, 0, 0, 1200, 600)
  
  Engine.update(engine);
  showBoats()
  push()  //Add new properties
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310) 
  pop() //Remove the last added property

  rect(ground.position.x, ground.position.y,width*2,1);
  
   cannon.display()
   
  for(var i = 0; i < cannonballs.length; i++){
    showCannonballs(cannonballs[i])
    collisionwithboat(i)
  }


}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    cannonballs[cannonballs.length-1].shoot()
        //Remove the trajectory of the old cannonball
    cannonballs[cannonballs.length-2].path=[]
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonball=new CannonBall(cannon.x,cannon.y);
    cannonballs.push(cannonball)
  }
}

function showCannonballs(ball){
  if(ball){
    ball.display();
  }
}

function showBoats(){
    if(boats.length>0){

    if(boats[boats.length-1].body.position.x < width-400 || boats[boats.length-1]===undefined){
      
      var positions=[-40,-60,-20,-50]
      var position=random(positions)
      var boat= new Boat(width-80,height-60,150,150, position)
      boats.push(boat)
    }

    for(var i=0;i<boats.length;i++){
      if(boats[i]){
        Body.setVelocity(boats[i].body,{x:-0.8,y:0})
        boats[i].display()
      }
    }

  }
  else{
   var boat= new Boat(width-80,height-60,150,150, -60)
   boats.push(boat)
  }
}
function collisionwithboat(index){
  for(var i=0;i<boats.length;i){
    if(boats[i] !== undefined && cannonballs[index] !== undefined){
      var collision=Matter.SAT.collides(cannonballs[index].body,boats[i].body)
      if(collision.collided){
        boats[i].remove(i)
        cannonballs[index].remove(index)
      }
    }
  }
}