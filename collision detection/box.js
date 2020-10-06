class box
{
    constructor(x,y,width,height)
    {
      var bounce = 
      {
        restitution:0.8,
        density:1,
        friction:0.3
      }
      this.body=bod.rectangle(x,y,width,height,bounce);
      this.width=width;
      this.height=height;
      wor.add(world,this.body);
    }

    display()
    {
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}