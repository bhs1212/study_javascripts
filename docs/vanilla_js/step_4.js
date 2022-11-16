const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/step_4.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 9498번 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C,
// 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// if (inputs >= 90) {
//   console.log("A");
// } else if (inputs >= 80 && inputs < 90) {
//   console.log("B");
// } else if (inputs >= 70 && inputs < 80) {
//   console.log("C");
// } else if (inputs >= 60 && inputs < 70) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 14681번 문제
let a = inputs[0];
let b = inputs[1];

if (a > 0 && b > 0) {
  console.log(`1`);
} else if (a < 0 && b > 0) {
  console.log(`2`);
} else if (a < 0 && b < 0) {
  console.log(`3`);
} else {
  console.log(`4`);
}
