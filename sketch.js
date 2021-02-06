const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var cir;
var rec;
var floor;
var r;

function setup(){

  var floor_options = {
isStatic : true

  }

  floor = Bodies.rectangle(200, 390, 200, 20, floor_options);

  World.add(world,floor);
  console.log(floor);

  var r_options = {
    isStatic : true
    
      }

      r = Bodies.rectangle(100, 430, 50, 20, r_options);

  var cir_options = {
    restitution : 1.0
  }
  cir = Bodies.circle(200, 200, 20, cir_options);
  World.add(world, cir);
  
}

function draw(){
  Engine.update(engine);
  rectMode(CENTER);  
rect(floor.position.x, floor.position.y, 400, 20);

rectMode(CENTER);  
rect(r.position.x, r.position.y, 50, 20);


ellipseMode(CENTER);
ellipse(cir.position.x, cir.position.y, 20, 20);


}
