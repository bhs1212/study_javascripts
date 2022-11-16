// Array == ArrayList
let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1, 2, 3, 4, 5];
// 초기화 - 명확한 값 없이 선언하면서 사용할 때
let fruits_init = new Array();
fruits_init = [];

//object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "banana"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "apple", objects];
let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

console.log();
