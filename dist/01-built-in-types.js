"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let name = "John Doe";
let is_active = true;
let not_found = null;
let not_defined = undefined;
let anything = "Yessica Tresiah";
anything = 30;
// Type inference (Typescript akan menebak tipe data secara otomatis)
let salary = 5000; // Typescript akan menganggap variabili ini sebagai number
let message = "Hello "; // menganggap ini sebagai string
function long_message() {
    console.log("ini adalah fungsi void");
}
console.log("Age: ", age);
console.log("Name: ", name);
console.log("Is Active: ", is_active);
//# sourceMappingURL=01-built-in-types.js.map