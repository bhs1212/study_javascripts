// 화면 정의서대로 출력
// datatypes : Array, Object
// functions : 3개 만들기
// 답변은 미리 file에 저장된 것을 사용
// forEach 1회 이상 사용

// 프로세스

// 입력
// 설문 문항사항 : objec in Array - [{문항}, {문항}...] (option:orders 표시된 순서를 오름차순 정렬)
// 설문 답항 사항 : [{답항}, {답항}...] (option:orders 표시된 순서를 오름차순 정렬)
// 답변 사항 - [2,3,4,3,5]

//처리
// 문항, 답항, 답변 매칭

//출력
// 매칭 출력

const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/case/javascriptWithPoll.txt";
// 답변
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 문항 사항
let question_arr = [
  { q: "해당 매장을 방문시 매장은 청결 하였습니까?", qid: "Q1", order: 1 },
  { q: "직원이 제조한 음료에 대해 맛은 좋았습니까?", qid: "Q2", order: 2 },
  { q: "주문시 직원은 고객님께 친절 하였습니까?", qid: "Q3", order: 3 },
  {
    q: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    qid: "Q4",
    order: 4,
  },
  {
    q: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    qid: "Q5",
    order: 5,
  },
];

// 답항 사항
let example_arr = [
  { e: "전혀 아니다", eid: "E1", order: 1 },
  { e: "아니다", eid: "E2", order: 2 },
  { e: "보통이다", eid: "E3", order: 3 },
  { e: "그렇다", eid: "E4", order: 4 },
  { e: "매우 그렇다", eid: "E5", order: 5 },
];

// 문항, 답항 출력
for (let i = 0; i < question_arr.length; i++) {
  console.log(`${question_arr[i]["order"]}. ${question_arr[i]["q"]}`);
  exam_anwerfunction(i);
}

console.log("----------------설문자 선택----------------");
// 문항마다 설문자가 선택한 답 출력
for (let i = 0; i < question_arr.length; i++) {
  console.log(`${question_arr[i]["order"]}. ${question_arr[i]["q"]}`);
  answerfunction(i);
}
console.log("");
console.log("이용해 주셔서 감사합니다.");

// 함수

// 문항에 따른 답항과 답 출력 함수
function exam_anwerfunction(i) {
  if (question_arr[i]["order"] == 1) {
    examplefunction(0, 1, 2);
    console.log(`답 : ${inputs[i]}`);
  } else if (question_arr[i]["order"] == 2) {
    examplefunction(0, 1, 2, 3);
    console.log(`답 : ${inputs[i]}`);
  } else if (question_arr[i]["order"] == 3) {
    examplefunction(0, 1);
    console.log(`답 : ${inputs[i]}`);
  } else if (question_arr[i]["order"] == 4) {
    examplefunction(0, 1, 2, 3, 4);
    console.log(`답 : ${inputs[i]}`);
  } else if (question_arr[i]["order"] == 5) {
    examplefunction(0, 1, 2);
    console.log(`답 : ${inputs[i]}`);
  }
}

// 답항 출력 함수
function examplefunction(...args) {
  let examfunction = (arg) => {
    console.log(`(${example_arr[arg].order}) ${example_arr[arg].e}`);
  };
  args.forEach(examfunction);
}

// 설문자가 고른 답변 출력 함수
function answerfunction(i) {
  if (question_arr[i]["order"] == 1) {
    console.log(`(${inputs[i]}) ${example_arr[i].e}`);
  } else if (question_arr[i]["order"] == 2) {
    console.log(`(${inputs[i]}) ${example_arr[i].e}`);
  } else if (question_arr[i]["order"] == 3) {
    console.log(`(${inputs[i]}) ${example_arr[i].e}`);
  } else if (question_arr[i]["order"] == 4) {
    console.log(`(${inputs[i]}) ${example_arr[i].e}`);
  } else if (question_arr[i]["order"] == 5) {
    console.log(`(${inputs[i]}) ${example_arr[i].e}`);
  }
}
