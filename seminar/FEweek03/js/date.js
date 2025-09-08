const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(`${hours}시 ${minutes}분 ${second}초`);
