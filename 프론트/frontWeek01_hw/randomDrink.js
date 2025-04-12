const drinks = [
  //
  { name: "water", price: 700 },
  { name: "Pocari Sweat", price: 2100 },
  { name: "coke Zero", price: 1400 },
  { name: "Dr.Pepper Zero", price: 1500 },
  { name: "Sprite Zero", price: 1300 },
  { name: "Toreta", price: 1900 },
  { name: "TEJAVA", price: 1200 },
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBuy() {
  let wallet = Math.floor(Math.random() * 3001) + 2000;
  // 지갑에 있는 돈: 2000 ~ 5000원

  console.log("🥤 음료수 랜덤 뽑기 ⭐️");
  console.log(`💰 현재 잔액 : ${wallet}원 💰`);

  for (let i = 0; i < 3; i++) {
    const drink = getRandom(drinks);
    console.log(`🎰 ${i + 1}번째 음료 뽑기 시도 🎰`);

    if (drink.price <= wallet) {
      wallet -= drink.price;
      console.log(`✅ ${drink.name} 음료가 나왔어요! (가격: ${drink.price}원)`);
      console.log(`💸 지갑에 남은 돈: ${wallet}원`);
      drinkHisory.push(drink.name); // 구매한 음료를 목록에 저장
    } else {
      console.log("❌ 돈이 부족해요! 음료를 살 수 없어요!");
      console.log(
        `😓 ${drink.name} 음료를 구매하려면 ${
          drink.price - wallet
        }원이 더 필요해요.`
      );
    }
  }
}
getBuy(); // 프로그램 (함수) 실행
