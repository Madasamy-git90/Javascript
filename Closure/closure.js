// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, 
// even after the outer function has closed. 


// For example,

// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'Madasamy';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value