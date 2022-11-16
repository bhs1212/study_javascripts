const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/loops_max.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxnum = inputs[0];
let index = 0;
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] > maxnum) {
    maxnum = inputs[i];
    index = i;
  }
}
console.log(`${maxnum}`);
console.log(`${index + 1}`);
