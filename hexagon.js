class Polygon{
    constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution:1,
       }
       this.body=Bodies.circle(x,y,radius,options)
       this.image=loadImage("polygon.png")
       this.radius=radius
       World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
    }
}