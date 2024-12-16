// The benefit of using a callback function is that you can wait for the result of a previous function call and then execute 
// another function call.
//  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
//greet();
sayName('Samy');