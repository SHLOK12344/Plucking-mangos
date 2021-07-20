class launcher{
     constructor(body1,body2){
       var options={
           bodyA:body1,
           pointB:body2
       }
      this.launch=Constraint.create(options);
      World.add(world,this.launch);
     }
     fly(){
      this.launch.bodyA=null;
          }
          
   display(){
    if(this.launch.bodyA){
    var pointA=this.launch.bodyA.position
       var pointB=this.launch.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
   }
}