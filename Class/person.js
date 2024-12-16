
// classes provide a way to create blueprints for objects
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person('Madasamy',34);
let person2 = new Person('Bavi',30);

person1.display();
person2.display();