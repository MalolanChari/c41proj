
var rain=[],drop;
var maxDrop=1000;
var boy,thunder;

function setup() {
  createCanvas(800,700);
  boy = new Umberalla(200,270)
  for(var i = 100;i < 1000;i=i++){
    if(World.frameCount%100 === 0){
    thunder = new Thunder(600,-5)
    }
  }
  for(var i=0; i<maxDrop; i++){
    drop=new Drop(random(0,800),random(0,700))
    rain.push(drop);
  }
}

function draw() {
    if(World.frameCount%10 === 0){
        thunder = null
    }
  background(0);
  boy.display();
  if(thunder != null){
  thunder.display();
  }
  for(var i=0; i<rain.length;i++){
    rain[i].display();
    rain[i].fall();
  }
  
}
