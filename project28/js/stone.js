class Stone{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2 
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("images/stone.png")
        World.add(world, this.body);
    }
    display()
    imageMode(CENTER);
    }
