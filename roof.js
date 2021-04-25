class Roof{
    constructor(x , y , w , h){
        var options = {
            isStatic:true
        }
       
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options); -
        World.add(world, this.body);
    }
    display(){
        var roofPos=this.body.position;


        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0)
        rect(roofPos.x,roofPos.y,this.w, this.h);
    
    }
}