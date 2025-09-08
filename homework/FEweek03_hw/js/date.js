async function fetchSongs(keyword) {
  try {
    const response = await fetch(
      `https://api.manana.kr/karaoke/singer/${encodeURIComponent(keyword)}.json`
    );
    const songs = await response.json();

    const container = document.getElementById("result-list");
    container.innerHTML = "";

    const filteredSongs = songs.filter((song) => {
      return song.title;
    });

    filteredSongs.forEach((song) => {
      const card = document.createElement("li");
      card.className = "song-card";

      card.innerHTML = `
          <div class="song-title">${song.title}</div>
          <div class="song-info">
            <span>가수: ${song.singer}</span> <span>작곡: ${song.composer}</span>
          </div>
          <div class="song-info">
            <span>발매일: ${song.release}</span> <span>no: ${song.no}</span>
          </div>
        `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

const form = document.querySelector(".search-box");
const input = document.querySelector(".search-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const keyword = input.value.trim();
  if (!keyword) {
    alert("가수 이름을 입력해주세요!");
    return;
  }
  fetchSongs(keyword);
});
