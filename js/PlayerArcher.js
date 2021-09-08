class PlayerArcher{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
    
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image=loadImage("./assets/playerArcher.png")
        World.add(world, this.body);

        Matter.Body.setAngle(this.body, -PI / 2);
    }
    
    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
            this.angle += 0.02;
          }
      
        if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
            this.angle -= 0.02;
          }
     push();
     image(this.image,this.x,this.y,this.width,this.height);
     pop();
    
        }
}