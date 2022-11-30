const API_KEY = "d3890f0";
const BASE_URL = "http://www.omdbapi.com/";
const inputContainer = document.querySelector("#input-container");
const searchResultArea = document.querySelector("#films");
const filmDetails = document.querySelector("#film-details");
const pagesContainer = document.querySelector("#pages");
const btnSearch = document.querySelector("#search");
const inputFilmTitle = document.querySelector("#input-film-title");
const filmsWrapper = document.querySelector("#films-wrapper");
const statusMassage = document.createElement("span");
const nextPage = document.createElement("button");

nextPage.id = "next";
const prevPage = document.createElement("button");
prevPage.id = "prev";
let currentPage = 1;

pagesContainer.classList.add("pages-container");

statusMassage.classList.add("status-massage");
filmsWrapper.prepend(statusMassage);

inputContainer.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    getSearchResult();
  }
});
btnSearch.addEventListener("click", getSearchResult);

const renderFilmListToHTML = (result, pageId) => {
  const {
    Response: responseStatus,
    Error: errorStatus,
    Search: searshResult,
    totalResults,
  } = result;
  if (responseStatus === "False") {
    statusMassage.innerHTML = "";
    searchResultArea.innerHTML = "";
    statusMassage.classList.add("error");
    statusMassage.innerHTML = `⚠ ${errorStatus}`;
    pagesContainer.innerHTML = "";
    currentPage = 1;
  } else {
    let arrayFilms = searshResult;
    statusMassage.innerHTML = "";
    statusMassage.classList.remove("error");
    statusMassage.innerHTML = `${totalResults} results found for "${inputFilmTitle.value}"`;
    const totalPages = Math.ceil(totalResults / 10);

    if (String(totalPages?.length) && !pageId) {
      renderPages(totalPages);
    }

    searchResultArea.innerHTML = "";
    arrayFilms.forEach((el) => {
      const { Poster: poster, Title: title, imdbID: moveId } = el;
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
      filmPoster.src = poster;
      filmTitle.innerHTML = title;
      buttonDetails.innerHTML = "more";
      buttonDetails.classList.add("btn-details");
      async function getFilmId() {
        try {
          const response = await axios.get(
            `${BASE_URL}?apikey=${API_KEY}&i=${moveId}`
          );
          const { data: result } = response;

          filmDetails.innerHTML = "";
          renderDetails(result);
        } catch (error) {
          console.error(error);
        }
      }

      buttonDetails.addEventListener("click", getFilmId);
    });
  }
};
async function getSearchResult() {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${inputFilmTitle.value}`
    );
    const { data: result } = response;
    filmDetails.innerHTML = "";
    pagesContainer.innerHTML = "";
    renderFilmListToHTML(result);
  } catch (error) {
    console.error(error);
  }
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

async function handlePage(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${inputFilmTitle.value}&page=${page}`
    );
    renderFilmListToHTML(response.data, page);
  } catch (error) {
    console.error(error);
  }
}

const renderPages = (totalPages) => {
  if (totalPages === 1) return;
  const pagesLength = totalPages > 100 ? 100 : totalPages;
  const pageArray = [];

  for (i = 1; i <= pagesLength; i++) {
    pageArray.push(i);
  }

  const fixArrayLength = pageArray.slice(0, 15);
  fixArrayLength.map((page) => {
    const pageItem = document.createElement("span");
    pageItem.classList.add("page");
    pageItem.setAttribute("id", page);
    currentPage;
    pageItem.innerHTML = page;
    pagesContainer.appendChild(pageItem);
  });

  prevPage.innerHTML = "<";
  nextPage.innerHTML = ">";
  pagesContainer.add;
  pagesContainer.prepend(prevPage);
  pagesContainer.appendChild(nextPage);

  pagesContainer.addEventListener("click", (e) => {
    getSelectedPage(e, fixArrayLength.length);
  });
};

function getSelectedPage(e, length) {
  const { id: pageId } = e.target;

  const elementsPage = document.querySelectorAll(".page");
  const ArrayElementsPage = Array.prototype.slice.call(elementsPage);
  if ((pageId === "next" && +currentPage === length) || pageId === "pages") {
    return;
  } else if (pageId === "next") {
    currentPage++;
    handlePage(currentPage);
  } else if (pageId === "prev" && +currentPage === 1) {
    return;
  } else if (pageId === "prev") {
    currentPage--;
    handlePage(currentPage);
  } else {
    currentPage = pageId;
    handlePage(pageId);
  }

  ArrayElementsPage.forEach((el) => {
    if (currentPage == el.getAttribute("id")) {
      el.classList.add("currentPage");
    } else {
      el.classList.remove("currentPage");
    }
  });
}
