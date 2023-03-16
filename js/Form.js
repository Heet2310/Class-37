class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Enter Your Name");
    this.playbutton = createButton("Play");
    this.titleImg = createImg("./assets/title.png","Game Title");
    this.greeting = createElement("h2");
  }
setElementPosition(){
  this.titleImg.position(120,100);
  this.input.position(width/2 - 110,height/2 - 30);
  this.playbutton.position(width/2 - 90,height/2 - 0);
  this.greeting.position(width/2 - 300,height/2 - 100);
}
  display(){
    this.setElementPosition();
    this.handleMousePressed();
  }

  hide(){
    this.greeting.hide();
    this.input.hide();
    this.playbutton.hide();
  }

  handleMousePressed(){
    this.playbutton.mousePressed(() => {
      this.input.hide();
      this.playbutton.hide();

      //Press The Key Above Tab Key
      var message = `
      Hello ${this.input.value()}

      <br/>Wait for another player to join...`

      this.greeting.html(message);
    })
  }
}

