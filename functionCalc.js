let calc = (a, b, op) => {
    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => y !== 0 ? x / y : "Cannot divide by zero"
    };

    if (operations[op]) {
        return operations[op](a, b);
    } else {
        return "Invalid operator";
    }
}

console.log(calc(10, 5, '+'));  // Output: 15
console.log(calc(10, 5, '-'));  // Output: 5
console.log(calc(10, 5, '*'));  // Output: 50
console.log(calc(10, 5, '/'));  // Output: 2
console.log(calc(10, 5, ' '));  // Output: Invalid operator
console.log(calc(10, 0, '/'));  // Output: Cannot divide by zero
