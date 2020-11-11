class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 =loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos = this.body.position;
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position =[pos.x,pos.y];
      this.trajectory.push(position);
    
    }
    for (var r=0;r<this.trajectory.length;r++){
      image(this.image1,this.trajectory[r][0],this.trajectory[r][1]);

    }
    super.display();

  }
}
