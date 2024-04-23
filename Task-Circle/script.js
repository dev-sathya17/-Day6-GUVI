// Creating a class with the properties radius and color
class Circle {
  // constructor to initialize the values of the circles with the values as arguments.
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  //getters and setters for the radius property
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }

  //getters and setters for the color property
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }

  //toString function to stringify the object
  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }

  //function to calculate the area of the circle
  getArea() {
    return Number(Math.PI * this.radius * this.radius);
  }

  //function to calculate the circumference of the circle
  getCircumference() {
    return Number(2 * Math.PI * this.radius);
  }
}

// creating an instance of the class Circle
let circle = new Circle(5.0, "blue");
console.log(circle);

// setting a new value for the radius and color property and checking its output in the console respectively.
circle.setRadius(10);
console.log(circle.getRadius());

circle.setColor("gold");
console.log(circle.getColor());

// Stringified representation of the circle object
console.log(circle.toString());

// Area of the circle object
const area = circle.getArea();
console.log(area);

// Circumference of the circle object
const circumference = circle.getCircumference();
console.log(circumference);
