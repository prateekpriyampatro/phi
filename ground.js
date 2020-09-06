class ground {
constructor(x,y,width,height){
var options = {
isStatic:true,
friction: 0.5,
density:2
}
this.x=200;
this.y = 690;
this.width= width;
this.height = height;
this.body = Bodies.rectangle(x,y,width,height);
World.add(world,this.body);
}
display(){
var pos = this.body.position;
push();
rectMode(CENTER);
rect(pos.x,pos.y,this.body.width,this.body.height);
pop();
}
}