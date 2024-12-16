// single-thread

// When we say that JavaScript is single-threaded, it means that JavaScript executes code one line at a time, in a sequence.

// The main thread, where all JavaScript code runs, can only do one task at a time, and there is no way to run 
// multiple pieces of code in parallel on this thread

// How do Event loops work?
// Call Stack:
// JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).
// Callback Queue:
// Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are 
// complete, corresponding functions (callbacks) are placed in the callback queue.
// Event Loop:
// The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function 
// from the callback queue and pushes it onto the call stack for execution.
// Execution:
// The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous 
// operations.
// Callback Execution:
// When an asynchronous operation is complete, its callback is placed in the callback queue.
// Repeat:
// The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback 
// queue.


// In this example, a JavaScript script demonstrates synchronous blocking behavior. It starts by logging “Before delay,” then uses a 
// function delayBySeconds to create a delay of 5 seconds using a busy-wait loop. The script then logs “After delay” after the 5-second 
// delay completes

console.log("Before delay");

function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");
