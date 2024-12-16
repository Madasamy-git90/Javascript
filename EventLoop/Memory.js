// Heap memory
// This is where JavaScript stores objects and data that are dynamically allocated. Memory in the heap is allocated in an unordered way, 
// which means data can be stored at any available location.

// Stack memory
// Stack memory is used to keep track of function calls. It works in a last-in, first-out (LIFO) manner, meaning the last function 
// that gets pushed onto the stack is the first one to be popped off when it’s done.

// Function call stack
// The call stack specifically tracks which functions are being executed at any moment. If a function calls another function, 
// the new function is added to the top of the stack. Once a function finishes, it’s removed from the stack, and execution resumes 
// where it left off.

// Example: This example shows how fuction goes into stack whenever a function is called.

function LevelTwo() {
    console.log("Inside Level Two!")
 }
 
 function LevelOne() {
    console.log('2');
    LevelTwo()
 }
 
 function main() {
    console.log('1');
    LevelOne()
 }
 
 main()