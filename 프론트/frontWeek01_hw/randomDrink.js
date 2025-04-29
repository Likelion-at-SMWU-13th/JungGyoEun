// 음료 리스트를 배열에 객체 형태로 저장
const drinks = [
  { name: "water", price: 700 },
  { name: "Pocari Sweat", price: 2100 },
  { name: "coke Zero", price: 1400 },
  { name: "Dr.Pepper Zero", price: 1500 },
  { name: "Sprite Zero", price: 1300 },
  { name: "Toreta", price: 1900 },
  { name: "TEJAVA", price: 1200 },
];

// 배열에서 랜덤 요소를 하나 선택하는 함수 (Math 메서드 활용)
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBuy() {
  let wallet = Math.floor(Math.random() * 3001) + 2000;
  // 지갑에 있는 돈: 2000 ~ 5000원 사이에서 랜덤 설정
  const drinkHistory = [];
  // [추가 기능] 구매한 음료 목록을 저장할 배열
  let lastDrink = null;
  // [추가 기능] 같은 음료 연속 방지용 변수
  let recharged = false;
  // [추가 기능] 1회 자동 충전 상태 (flase)

  console.log("⭐️🥤 음료수 랜덤 뽑기 🥤⭐️");
  console.log(`💰 현재 잔액 : ${wallet}원 💰`);

  // 3번 반복하여 자판기 실행
  for (let i = 0; i < 3; i++) {
    let drink = getRandom(drinks); //  바뀔 수 있는 값이므로 let으로 선언
    console.log(`🎰 ${i + 1}번째 음료 뽑기 시도 🎰`);

    // [추가 기능] 같은 음료 연속 뽑기 방지
    do {
      drink = getRandom(drinks);
    } while (drink === lastDrink);
    lastDrink = drink;

    // [추가 기능] 잔액 부족 시 1회에 자동 충전
    if (drink.price > wallet && !recharged) {
      // 조건 : 현재 잔액이 구메하려는 음료 값보다 적고, 1회 충전을 사용하지 않았을 때
      wallet += 1000;
      console.log("⚡ 자동충전으로 1000원이 추가됩니다!");
      console.log(`💰 현재 잔액 : ${wallet}원 💰`);
      recharged = true; // 1회 충전 사용 완료 (true)
    }

    // 조건문으로 구매 가능 여부 판단
    if (drink.price <= wallet) {
      wallet -= drink.price;
      console.log(`✅ ${drink.name} 음료가 나왔어요! (가격: ${drink.price}원)`);
      console.log(`💸 지갑에 남은 돈: ${wallet}원`);
      drinkHistory.push(drink.name); // 구매한 음료를 목록에 저장
    } else {
      console.log("❌ 돈이 부족해요! 음료를 살 수 없어요!");
      console.log(
        `😓 ${drink.name} 음료를 구매하려면 ${
          drink.price - wallet
        }원이 더 필요해요.`
      );
    }
  }
  // 반복이 끝난 뒤 구매한 음료 목록 출력
  console.log("📝 구매한 음료 목록: " + drinkHistory.join(", "));
}
getBuy(); // 프로그램 (함수) 실행
