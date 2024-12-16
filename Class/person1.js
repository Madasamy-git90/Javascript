//Create Objects Without Classes
//In JavaScript, you have the flexibility to create objects directly without the use of formal class definitions. 
//This can be achieved by using object literals.

// create an object 'person' without a formal class definition
let person = {
    name: "Jack",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
};
person.greet();