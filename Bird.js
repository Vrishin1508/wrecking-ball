class Bird  {
  constructor(x,y){
   // super(x,y,50,50);
    this.body = Bodies.circle(x,y,20)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,20,20)
   // super.display();
  }
}
