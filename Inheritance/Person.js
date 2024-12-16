// Using class inheritance, a class can inherit all the methods and properties of another class.

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hi ${this.name}`)
    }
}
class Student extends Person {

}
let stud = new Student('Samy')
stud.greet();