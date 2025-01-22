"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cara 1: tipe[]
let numbers = [1, 2, 3, 4, 5];
let names = ["Yessica", "Tresiah", "Yess"];
// Cara 2: Array[]
let score = [85, 92, 78];
let fruits = ["Apple", "Orange", "Banana"];
// Array dengan multiple types (union type)ba
let mixed = [1, "two", 3, "four"];
// Array methods
numbers.push(6); // Menambah element
names.pop(); // Menghapus element terakhir
// Iterasi array
numbers.forEach((num) => {
    console.log("Number: ", num);
});
// Array mapping
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);
//# sourceMappingURL=02-arrays.js.map