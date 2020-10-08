const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, division;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);

  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,height - 10,480,25)
  division = new Division(240,height - 40,480,35)


  Engine.run(engine);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  division.display();

  for(var k = 0;k <= width; k = k + 80 ){
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
   
  }

  for(var j = 40;j <= width; j = j + 50 ){
    plinkos.push(new Plinko(j, 75, 10))
   
  }

  for(var j = 15;j <= width - 10; j = j + 50 ){
    plinkos.push(new Plinko(j, 175,10))
   
  }

  for(var l = 0;l <= width; l = l + 90 ){
    particles.push(new Particle(l, height - particleHeight / 2, 10, particleHeight))
   
  }

  for(var k = 0;k < divisions.length; k++ ){
    divisions[k],display();
   
  }

  for(var j = 40;j < plinkos.length; j++ ){
    plinkos[j],display();
  }

  for(var j = 15;j < plinkos.length; j++ ){
    plinkos[j],display();
   
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10,width/2 + 10,10,10)))
  }

  for(var l = 0;l < particles.length; l++){
    particles[l],display();
   
  }






  drawSprites();
}


 