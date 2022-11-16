//정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
function sum(n) {
  let sum = 0;
  for (let i of n) {
    sum += i;
  }
  return sum;
}

let arr = [1, 3, 5, 7];
console.log(`${sum(arr)}`);
