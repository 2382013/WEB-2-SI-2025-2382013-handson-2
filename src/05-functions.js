"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic function dengan tipe
function add(a, b) {
    return a + b;
}
// Arrow function dengan tipe
const multiply = (x, y) => {
    return x * y;
};
// Function dengan optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
// Function dengan default parameter
function createEmail(to, subject = "No Subject") {
    return `Email to : ${to}, ${subject}`;
}
// Function dengan rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function processInput(input) {
    if (typeof input === "number") {
        return input * 2;
    }
    return input.toUpperCase();
}
//console.log(add(10, 5));
//console.log(multiply(10, 5));
//console.log(greet("John"));
//console.log(greet("John", "Good Morning!"));
//console.log(createEmail("john@example.com"));
//console.log(sum(1, 2, 3, 4, 5));
console.log(processInput("Hello World"));
