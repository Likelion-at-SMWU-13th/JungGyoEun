const my = {
  name: "gyoeun",
  age: 23,
  major: "CS",
  tired: true,
};

console.log(my);
my.age = 20;
my.hunry = true;

console.log(my);

//
console.log(5 == "5");
console.log(5 === "5");

//
let x = 10;

let result = x % 2 ? "홀수" : "짝수";
console.log(result);

//
id = prompt("아이디를 입력해주세요");
password = prompt("비밀번호를 입력해주세요");
if (id == "like lion" && password == "1234") {
  alert("인증에 성공했습니다.");
} else alert("인증해 실패했습니다.");

// 중첩 for문
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}], [${[j]}]`);
  }
}

// for..in문
const person = {
  name: "jeong",
  adress: "seoul",
};

for (const key in person) {
  console.log(key + ":" + person[key]);
}

// while문, do-whlile문
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);

// 화살표 함수
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const multiply2 = (x, y) => {
  return x * y;
};

console.log(multiply2(2, 4));

// Rest Parameter  문법
const multiplyAll = (...args) => {
  return args.reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5));

// forEach
const numbers = [1, 2, 3];
const pows = [];

numbers.forEach((item) => pows.push(item ** 2));
console.log(pows);
