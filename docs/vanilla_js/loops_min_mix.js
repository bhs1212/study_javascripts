const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/loops_min_mix.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
//   .map(Number);

let a = inputs[0];
let arr = inputs[1].split(" ").map(Number);

let arr_min = arr[0];
let arr_max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr_min) {
    arr_min = arr[i];
  }
  if (arr[i] > arr_max) {
    arr_max = arr[i];
  }
}
let statistics_obj = { min: 0, max: 0 };
statistics_obj["min"] = arr_min;
statistics_obj["max"] = arr_max;
console.log(`${statistics_obj["min"]} ${statistics_obj["max"]}`);
