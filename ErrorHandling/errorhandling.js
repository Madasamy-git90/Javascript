// Error handling in JavaScript is vital for creating robust and user-friendly applications. 
// It allows developers to manage unexpected issues and ensure the program doesn't crash unexpectedly.

// 1. Basic Error Handling with try...catch
// Usage:
// The try block contains code that may throw an error.
// The catch block handles the error and prevents the program from crashing.

try {
    const result = 10 / 0; // No error, division by 0 results in Infinity
    console.log(result);

    // Triggering an error
    JSON.parse("Invalid JSON"); // This will throw an error
} catch (error) {
    console.error("An error occurred:", error.message); // Handles the error gracefully
} finally {
    console.log("This code runs no matter what."); // Always executes
}
