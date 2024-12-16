// Closures are often used to maintain state in a function.
function createCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter();
console.log(counter2()); // Output: 1
