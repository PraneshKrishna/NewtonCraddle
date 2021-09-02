class Rope{
    constructor(bodyA,bodyB,OffsetX){
        var options = {
bodyA:bodyA,
bodyB:bodyB
        }
        this.rope = Constraint.create(options)
        
        World.add(world,this.rope)

    }
    display(){
       var pointA = this.rope.bodyA.position
       var pointB = this.rope.bodyB.position
strokeWeight(2)
line (pointA.x,pointA.y,pointB.x,pointB.y);

    }

}