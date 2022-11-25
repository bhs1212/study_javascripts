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

let fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/case/javascriptWithPoll.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let input_answers = [1, 2, 4, 3, 1];
for (let i = 0; i < 5; i++) {
  input_answers[i] = input[i];
}

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  // { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  // { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

// 예상 묶음 데이터
// [
//    [Q1, E1, E2] -> {questions_uid:Q1, answers_uid:[E1, E2]}
//    [Q2, E1, E2, E3] -> {questions_uid:Q2, answers_uid:[E1, E2, E3]}
//    [Q3, E1, E2] -> {questions_uid:Q3, answers_uid:[E1, E2]}
//    [Q4, E1, E2, E3, E4, E5] -> {questions_uid:Q4, answers_uid:[E1, E2, E3, E4, E5]}
//    [Q5, E1, E2, E3] -> {questions_uid:Q5, answers_uid:[E1, E2, E3]}
// ]
// 1차 방식 : [Q1, Q2, Q3, Q4, Q5]
// 2차 방식 : Array in Array [[Q1, E1, E2], [Q2, E1, E2, E3] ...]
// 3차 방식 : Object in Array [{questions_uid:Q1, answer_uids:[E1, E2]}]

let polls = []; // 전체 묶음
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    // 마지막 Q5 입력
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

// polls.push(questions); // 마지막 Q5 입력
// console.log(`${polls}`);

//출력
// [
//   {questions_uid:Q1, answer_uids:[E1, E2]},
//   {questions_uid:Q2, answer_uids:[E1, E2, E3]},
//   ...
// ]
// polls[0]["questions_uid"];
// polls[0]["answer_uids"][0];
// polls[0]["answer_uids"][1];

// polls[1]["questions_uid"];
// polls[1]["answer_uids"][0];
// polls[1]["answer_uids"][1];
// polls[1]["answer_uids"][2];

// 설문 문항을 가져오는 function
// Q1. 해당 매장을 방문 시 매장은 청결하였습니까?
// 1. E1
// 2. E2
// Q2. 주문 시 직원은 고객님께 친절하였습니까?
// ...

function getQuetionByUid(question_uid) {
  let question_desc;
  for (question_list of questions_list) {
    if (question_list["question_uid"] == question_uid) {
      question_desc = question_list["question"];
    }
  }
  return question_desc;
}

for (let poll of polls) {
  console.log(`${getQuetionByUid(poll["questions_uid"])}`);
  // console.log(`${poll["questions_uid"]}`); // == polls[idx]
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    //answers
    console.log(`${index + 1}. ${answer_uid}`);
  });
}
