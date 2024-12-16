// Throwing Custom Errors
// Usage:
// Use the throw keyword to throw custom errors.
// These can be simple strings, numbers, objects, or instances of the Error class.

function calculateSquareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(number);
}

try {
    console.log(calculateSquareRoot(25)); // Outputs: 5
    console.log(calculateSquareRoot(-9)); // Throws an error
} catch (error) {
    console.error("Error:", error.message); // Outputs: Error: Cannot calculate square root of a negative number.
}
