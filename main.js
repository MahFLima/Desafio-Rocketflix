import { API_KEY, BASE_URL, API_URL, IMG_URL } from "./api.js";

const btn = document.querySelector(".btn");
const filmContainer = document.querySelector(".film-container");

const showMovie = (result) => {
  if (result.poster_path) {
    filmContainer.innerHTML = `
      <img class="film-img" src="${IMG_URL + result.poster_path}" />
      <div class="film-content">
        <h3 class='title'>${result.title}</h3>
        <p class='overview'>
          ${result.overview}
        </p>
      </div>
      `;
  } else {
    filmContainer.innerHTML = `
      <img class="film-img" src="./assets/poster.png" />
      <div class="film-content">
        <h3 class='title'>Ops, hoje não é dia de assistir filme. Bora codar! 🚀</h3>
      </div>
      `;
  }
  console.log(result.poster_path);
};

function getMovie(url) {
  fetch(url)
    .then((response) => {
      response
        .json()
        .then((data) =>
          showMovie(
            data.results[Math.floor(Math.random() * data.results.length)]
          )
        );
    })
    .catch((e) => console.log(e.message));
}

btn.addEventListener("click", () => {
  getMovie(API_URL);
});
