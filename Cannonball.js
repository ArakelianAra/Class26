class CannonBall{

    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.path=[]
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options)
        World.add(world, this.body);

        this.image = loadImage("assets/cannonball.png");
    }

    display(){
        push()
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)

        pop()

        //Recording/storing the positions of the cannonball
        if(this.body.velocity.x>0 && this.body.position.x>220){
            //Pushing an array of positions
            this.path.push([this.body.position.x,this.body.position.y])
        }

        //Displaying a small cannonball at every element inside this.path
        for(var index=0;index<this.path.length;index++){
            image(this.image,this.path[index][0],this.path[index][1],5,5)
        }   



    }
    shoot(){
        var angle=cannon.angle - 25

        //Converting to radians
        angle=angle*(3.14/180)
        var velocity=p5.Vector.fromAngle(angle)

        //velocity.x = velocity.x /2; velocity.y = velocity.y/2
        velocity.mult(0.5)

        Body.setStatic(this.body,false)
        Body.setVelocity(this.body,{
            x: velocity.x * (180/3.14),
            y: velocity.y* (180/3.14)})
    }
    remove(index){
        Body.setVelocity(this.body,{x:0,y:0})
        setTimeout(()=>{
            World.remove(world,this.body);
            delete cannonballs[index]
        },1000)
        
    }
}