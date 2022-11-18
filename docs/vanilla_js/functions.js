// function name(parameter1, parameter2, parameter3) {
//     code to be executed
//     return
// }

//Normal Function
// param : 2 (1, 3), return 1 (1 + 3)
// function sum(item_first, item_second) {
//   return item_first + item_second;
// }

// {
//   let sum_number = 1 + 3;
//   sum_number = 3 + 5;
//   sum_number = 6 + 8;
//   let sum_function = sum(1, 2); // item_first = 1, item_second = 2
//   console.log();
// }

// // anonymouse Function
// let calculateSum = function (item_first, item_second) {
//   return item_first + item_second;
// };

// {
//   console.log(`${calculateSum(5, 7)}`);
// }

// // Arrow Function
// let calculateSumSecond = (item_first, item_second) => {
//   return item_first + item_second;
// };

// {
//   console.log(`${calculateSumSecond(7, 8)}`);
// }

// rest parameters
function printRestParams(...args) {
  let restParam = (arg) => {
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
