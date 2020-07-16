class Umberalla{
    constructor(x,y){
        this.x_pos=x;
        this.y_pos=y;
        this.w=100
        this.h=400;
        this.image = loadImage("boy.png")
       
    }

    display(){
        
        image(this.image,this.x_pos,this.y_pos);
    
    }

    
    
}