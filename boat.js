class Boat{
    constructor(x,y,w,h,pos){
        this.pos=pos
        this.body=Bodies.rectangle(x,y,w,h)
        this.width=w
        this.height=h
        this.image=loadImage("assets/boat.png")
        World.add(world,this.body)
        
    }
    
    display(){
        push()
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,this.pos,this.width,this.height)
        pop()
    }

    remove(index){


        setTimeout(()=>{
            World.remove(world, boats[index].body);
            delete boats[index]
        }, 2000)
    }

  
}

/*
Local function

    function(){}

Arrow function
    - only needed inside classes (can be used anywhere)
    - binds the object/property to the originial object that called (not the immediate object)

    name = ()=>{}

    Local arrow function:
        ()=>{}


*/
