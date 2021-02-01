class Slingshot{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB=pointB;
this.tone=Constraint.create(options);
World.add(world,this.tone);
}
fly(){
    this.tone.bodyA=null;
}
display(){
    if(this.tone.bodyA){
        var pointA= this.tone.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }
}