// 좋아요 요소 선택
const likeBtn = document.querySelector(".like-btn");
const likeCount = document.getElementById("like-count");

let liked = false;

likeBtn.addEventListener("click", () => {
  // 숫자 가져오기
  const currentText = likeCount.textContent;
  const currentNumber = parseInt(currentText.match(/\d+/)[0]);

  if (!liked) {
    // 좋아요 상태로 변경
    likeBtn.src = "/프론트/FEweek02_hw/image/red_like.png"; // 채워진 하트
    likeCount.textContent = `좋아요 ${currentNumber + 1}개`;
    liked = true;
  } else {
    // 좋아요 취소
    likeBtn.src = "/프론트/FEweek02_hw/image/like.png"; // 빈 하트
    likeCount.textContent = `좋아요 ${currentNumber - 1}개`;
    liked = false;
  }
});
