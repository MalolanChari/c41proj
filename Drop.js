class Drop{
    constructor(x,y){
        this.x_pos=x;
        this.y_pos=y;
        this.w=10
        this.h=10;
    }

    display(){
        fill("blue")
        ellipse(this.x_pos,this.y_pos,this.w,this.h);
    }

    fall(){
        this.y_pos=this.y_pos+15
        if(this.y_pos>=700){
            this.y_pos=0;
        }
    
    }
    
}