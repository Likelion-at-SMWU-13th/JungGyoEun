const movies = [
  { title: "썬더볼츠", rating: 8.42, genre: "액션" },
  { title: "마인크래프트 무비", rating: 7.32, genre: "코미디" },
  { title: "파과", rating: 8.25, genre: "액션" },
  { title: "거룩한 밤 : 데몬 헌터스", rating: 6.92, genre: "액션" },
  { title: "야당", rating: 9.07, genre: "범죄" },
  { title: "해피엔드", rating: 8.44, genre: "드라마" },
];

const actionMovie = movies.filter((movie) => {
  // 이렇게 중괄호로 감싸면 하나의 함수가 되므로 리턴 값이 꼭 있어야 함!
  return movie.genre.includes("액");
});
console.log("액이 들어가는 장르의 영화 목록", actionMovie);

async function fetchMovies() {
  try {
    const response = await fetch("movies.json");
    const movies = await response.json();
    const container = document.getElementById("movieContainer");
    const movieList = movies.filter((movie) => {
      return movie.genre === "액션"; /// includes 없이 filter 쓰는 방법
    });
    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="card-body">
            <h2 class="card-title">${movie.title}</h2>
            <p class="card-rating">⭐️ ${movie.rating}</p>
            <p class="card-description">${movie.description}</p>
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
}
fetchMovies();
