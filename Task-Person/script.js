// This is a class that depicts the basic details of a person as properties.
// The properties include name, email, age and address.
class Person {
  // constructor to initialize the properties of the person object with values passed as arguments to the constructor
  constructor(name, email, age, address) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  //   getter and setter for name
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  //  getter and setter for email
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }

  //   getter and setter for age
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }

  //   getter and setter for address
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
}

// toString function to stringify the object with a proper representation.
Person.prototype.toString = function () {
  return `Person => [Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Address:${this.address}]`;
};

// creating an instance of a Person.
const person = new Person("John", "johndoe@gmail.com", "38", "US");
console.log(person);

// creating an empty instance of a Person to demonstrate usage of getters and setters.
const person2 = new Person();
person2.setName("Marie");
person2.setEmail("mariecurie@atom.com");
person2.setAddress("Poland");
person2.setAge(55);

console.log(person2.getName());
console.log(person2.getEmail());
console.log(person2.getAge());
console.log(person2.getAddress());

// stringified representation of the object
console.log(person2.toString());
