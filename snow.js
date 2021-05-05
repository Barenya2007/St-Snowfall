class Snow{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.snowimage1 = loadImage("snow5.webp");
      World.add(world, this.body);
    }
    display(){

      image(this.image, 0, 0, this.width, this.height);    }
}