const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let readFileSync = fs.readFileSync(filepath);
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let first = inputs[0];
let second = inputs[1];

console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(Math.floor(first / second));
console.log(first % second);
