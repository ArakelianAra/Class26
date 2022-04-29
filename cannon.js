class Cannon{

    constructor(x, y, w, h, angle){

        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle

        this.cannonImg = loadImage("assets/canon.png");
        this.cannonbase=loadImage("assets/cannonBase.png")
    }

    display(){
        //console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle<65){
            this.angle=this.angle+2
        }
        if(keyIsDown(LEFT_ARROW) && this.angle>-75){
            this.angle=this.angle-2
        }

        image(this.cannonbase,70,20,200,200)
        
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannonImg,0,0,this.w,this.h)
        pop()
    }


}

/*
translation - movement in x & y - movement without rotating - Sliding/slipping
rotation - changing the angle
*/