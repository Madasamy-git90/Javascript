function createIncrementor() {
    let counter = 0; // Private variable scoped to the function
    function increment() {
        return counter += 1; // Increment and return the updated value
    }
    return increment; // Return the inner function
}

const incrementor = createIncrementor(); // Create a closure
const anotherVariable = 5; // Scoped variable for unrelated use

console.log(incrementor()); // Output: 1
console.log(incrementor()); // Output: 2
console.log(anotherVariable); // Output: 5