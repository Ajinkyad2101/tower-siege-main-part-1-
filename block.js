class Block{
constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height)
this.width=width
this.height=height
this.visiblity=255
World.add(world,this.body)
}
display(){
   
    push()
    rectMode(CENTER)
    fill("green");
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
    
   

}
}