const apiKey = "d3890f0";

const searchResultArea = document.querySelector("#films");
const filmDetails = document.querySelector("#film-details");
const pagesContainer = document.querySelector("#pages");
const btnSearch = document.querySelector("#search");
const inputFilmTitle = document.querySelector("#input-film-title");
const filmsWrapper = document.querySelector("#films-wrapper");
const statusMassage = document.createElement("span");
const nextPage = document.createElement("span");
const prevPage = document.createElement("span");

let sessionStorage = window.sessionStorage;
// sessionStorage.setItem("currentPage", "1");

pagesContainer.classList.add("pagies-container");

statusMassage.classList.add("status-massage");
filmsWrapper.prepend(statusMassage);

btnSearch.addEventListener("click", response);

const renderFilmListToHTML = (result, pageId) => {
  if (result.Response === "False") {
    statusMassage.innerHTML = "";
    searchResultArea.innerHTML = "";
    statusMassage.classList.add("error");
    statusMassage.innerHTML = `⚠ ${result.Error}`;
  } else {
    let arrayFilms = result.Search;
    statusMassage.innerHTML = "";
    statusMassage.classList.remove("error");
    statusMassage.innerHTML = `${result.totalResults} results found for "${inputFilmTitle.value}"`;
    const totalPages = Math.ceil(result.totalResults / 10);

    if (String(totalPages?.length) && !pageId) {
      renderPages(totalPages);
    }

    searchResultArea.innerHTML = "";
    arrayFilms.forEach((el) => {
      const filmData = searchResultArea.appendChild(
        document.createElement("div")
      );
      filmData.classList.add("film-style");
      const filmItem = filmData.appendChild(document.createElement("div"));
      filmItem.classList.add("film-item");
      const filmPoster = filmItem.appendChild(document.createElement("img"));
      filmPoster.classList.add("image");
      const filmTitle = filmItem.appendChild(document.createElement("span"));
      filmTitle.classList.add("film-title");

      const buttonDetails = filmData.appendChild(
        document.createElement("button")
      );
      filmPoster.src = el.Poster;
      filmTitle.innerHTML = el.Title;
      buttonDetails.innerHTML = "more";
      buttonDetails.classList.add("btn-details");
      function getFilmId() {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${el.imdbID}`)
          .then((result) => result.json())
          .then(renderDetails);
        filmDetails.innerHTML = "";
      }
      buttonDetails.addEventListener("click", getFilmId);
    });
  }
};
function response() {
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${inputFilmTitle.value}`)
    .then((result) => result.json())
    .then(renderFilmListToHTML);
  pagesContainer.innerHTML = "";
}

const renderDetails = (result) => {
  let arraAbout = Object.entries(result);

  arraAbout.forEach((el) => {
    const movieItem = filmDetails.appendChild(document.createElement("div"));
    movieItem.classList.add("details-item");

    if (el[0] === "Ratings") {
      el[1].forEach((rateItem) => {
        const rate = document.createElement("span");
        rate.innerHTML = `<span class="item-key">${rateItem.Source}</span>: <span>${rateItem.Value}</span>`;
        movieItem.appendChild(rate);
      });
    } else if (el[0] === "Poster") {
      const posterImg = document.createElement("img");
      posterImg.classList.add("movie-poster");
      posterImg.setAttribute("src", el[1]);
      movieItem.appendChild(posterImg);
      movieItem.classList.add("order");
    } else {
      movieItem.innerHTML = `<span class="item-key">${el[0]}:</span><span>${el[1]}</span>`;
    }
  });
};
function handlePage(page) {
  fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputFilmTitle.value}&page=${page}`
  )
    .then((result) => result.json())
    .then((result) => renderFilmListToHTML(result, page));
}

const renderPages = (totalPages) => {
  const pagesLength = totalPages > 100 ? 100 : totalPages;
  const pageArray = [];

  for (i = 1; i <= pagesLength; i++) {
    pageArray.push(i);
  }

  pageArray.slice(0, 15).map((page) => {
    const pageItem = document.createElement("span");
    pageItem.classList.add("page");
    pageItem.setAttribute("id", page);
    pageItem.innerHTML = page;

    pageItem.addEventListener("click", () => {
      handlePage(page);
    });

    pagesContainer.appendChild(pageItem);
  });
  const a = document.querySelectorAll(".page");
  console.log(a);
  let carPage = a[0];
  console.log(carPage)
  prevPage.addEventListener("click", () => {
    handlePage(+carPage.id - 1);
  });
  nextPage.addEventListener("click", () => {
    handlePage(+carPage.id + 1);
  });

  prevPage.innerHTML = "<";
  nextPage.innerHTML = " >";

  pagesContainer.prepend(prevPage);
  pagesContainer.appendChild(nextPage);
};

// const renderNavigation = (next, prev) => {
//   let selectedPage = Number(sessionStorage.getItem("currentPage"));
//   console.log(selectedPage);

// };
