// 좋아요 기능
const likeBtn = document.querySelector(".like-btn");
const likeCount = document.getElementById("like-count");

let liked = false;

likeBtn.addEventListener("click", () => {
  // 숫자 가져오기
  const currentText = likeCount.innerHTML;
  const currentNumber = parseInt(currentText.match(/\d+/)[0]);

  if (!liked) {
    // false 상태면
    // 좋아요 상태로 변경
    likeBtn.src = "/프론트/FEweek02_hw/image/red_like.png"; // 채워진 하트
    likeCount.innerHTML = `좋아요 ${currentNumber + 1}개`;
    liked = true;
  } else {
    // true 상태면
    // 좋아요 취소
    likeBtn.src = "/프론트/FEweek02_hw/image/like.png"; // 빈 하트
    likeCount.textContent = `좋아요 ${currentNumber - 1}개`;
    liked = false;
  }
});

// 더보기 기능
const textContent = document.querySelector(".text-content");
const moreBtn = textContent.querySelector(".more-btn");
const shortText = " 어버이날 기념 꽃다발!!!!♡";
const fullText = shortText + " 낳아 주셔서 감사합니다~~";
let more = false;

moreBtn.addEventListener("click", () => {
  if (!more) {
    textContent.innerText = fullText;
    textContent.appendChild(moreBtn);
    moreBtn.textContent = "접기";
  } else {
    textContent.innerText = shortText;
    textContent.appendChild(moreBtn);
    moreBtn.textContent = "...더 보기";
  }
  more = !more;
});
